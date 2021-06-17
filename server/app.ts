import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as helmet from 'helmet';
import { adminRouter, defaultRouter, webRouter } from './router/router';

/**
 * Express app -instance
 */
const app = express();

/**
 * Enable body-parser
 */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/**
 * Enable cors for local development
 */
app.use(cors({origin: 'http://localhost:4200'}));

/**
 * Behind a proxy
 */
app.set("trust proxy", true);

/**
 * Redirect .www traffic to non-www
 */
 function redirectWwwTraffic(req, res, next) {
    if (req.headers.host.slice(0, 4) === "www.") {
        var newHost = req.headers.host.slice(4);
        return res.redirect(301, req.protocol + "://" + newHost + req.originalUrl);
    }
    next();
}
app.use(redirectWwwTraffic);

/**
 * Enable extra security with Helmet
 * - Disable CSP since we load images from firestore bucket
 */
app.use(helmet({
    contentSecurityPolicy: false
}));

/**
 * Initialize routers
 */
app.use(defaultRouter);
app.use(adminRouter);
app.use(webRouter);

/**
 * Render admin dashboard
 */
app.use('/admin', express.static('dist/frontend'));
app.set('views', 'dist/frontend');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/admin*', (req, res) => {
    res.render('index');
});

/**
 * Catch rest of the routes as 404
 */
app.get('*', function(req, res){
    res.status(404).send(':(');
});

app.listen(process.env.PORT || 8080);
console.log('APP RUNNING IN PORT:', process.env.PORT || 8080)