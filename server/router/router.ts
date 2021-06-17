import { 
    getAdvertiser, 
    getAllArticles, 
    getArticleBySlug, 
    getArticlesByCategory, 
    getMeta, 
    getSponsor, 
    getUserByUID 
} from '../db';
import * as express from 'express';
import { Request, Response } from 'express';
import { apis } from '../../config/apis';
import { 
    AddArticleCategoryRequest, 
    AddReactionRequest, 
    AddSubscriberRequest, 
    CreateAdvertiserRequest, 
    CreateArticleRequest, 
    CreateSponsorRequest, 
    CreateTempUserRequest, 
    GetAllAdvertisersRequest, 
    GetAllArticlesRequest, 
    GetAllMediaRequest, 
    GetAllReactionsByArticleIdRequest, 
    GetAllSponsorsRequest, 
    GetAllUsersRequest, GetMetaRequest, 
    GetSubscribersRequest, 
    GetUserRequest, 
    LoginRequest, 
    RemoveCategoryRequest, 
    RemoveReactionRequest, 
    SaveMediaDataRequest, 
    UpdateAdvertiserRequest, 
    UpdateArticleRequest, 
    UpdateMediaDataRequest, 
    UpdateSiteConfigurationsRequest, 
    UpdateUserRequest 
} from '../../models/requests';
import { 
    AddArticleCategoryResponse, 
    AddReactionResponse, 
    AddSubscriberResponse, 
    CreateAdvertiserResponse, 
    CreateArticleResponse, 
    CreateSponsorResponse, 
    CreateTempUserResponse, 
    GetAllAdvertisersResponse, 
    GetAllArticlesResponse, 
    GetAllMediaResponse, 
    GetAllReactionsByArticleIdResponse, 
    GetAllSponsorsResponse, 
    GetAllUsersResponse, 
    GetMetaResponse, 
    GetSubscribersResponse, 
    GetUserResponse, 
    LoginResponse, 
    RemoveCategoryResponse, 
    RemoveReactionResponse, 
    SaveMediaDataResponse, 
    UpdateAdvertiserResponse, 
    UpdateArticleResponse, 
    UpdateMediaDataResponse, 
    UpdateSiteConfigurationsResponse, 
    UpdateUserResponse 
} from '../../models/responses';
import { 
    loginHandler,
    getAllArticlesHandler, 
    updateSiteConfigurationsHandler,
    getMetaHandler, 
    createTempUserHandler, 
    getAllUsersHandler, 
    saveMediaDataHandler, 
    getAllMediaHandler, 
    updateArticleHandler,
    createArticleHandler, 
    addArticleCategoryHandler, 
    updateUserHandler, 
    getUserHandler, 
    generateSitemapHandler, 
    generateRSSHandler, 
    createAdvertiserHandler, 
    getAllAdvertisersHandler,
    getSubscribersHandler,
    addSubscriberHandler,
    removeCategoryHandler,
    addReactionHandler,
    removeReactionHandler,
    getAllReactionsByArticleIdHandler,
    createSponsorHandler,
    getAllSponsorsHandler,
    updateAdvertiserHandler
} from './handlers';
import { 
    homeView,
    articleView, 
    categoryView
} from '../web/views';
import { Advertiser, Article, Sponsor } from '../../models';
import { slug } from '../web/utils/helpers';
import { generateSw } from '../web/utils/factories';
import { updateMediaDataHandler } from './handlers/admin/updateMediaData';
 
const adminRouter = express.Router();
const defaultRouter = express.Router();
const webRouter = express.Router();

/**
 * Admin routes
 */
adminRouter.post(apis.login, (request: LoginRequest, response: LoginResponse) => {
    return loginHandler(request, response);
});
adminRouter.post(apis.getAllMedia, (request: GetAllMediaRequest, response: GetAllMediaResponse) => {
    return getAllMediaHandler(request, response);
});
adminRouter.post(apis.saveMediaData, (request: SaveMediaDataRequest, response: SaveMediaDataResponse) => {
    return saveMediaDataHandler(request, response);
});
adminRouter.post(apis.updateMediaData, (request: UpdateMediaDataRequest, response: UpdateMediaDataResponse) => {
    return updateMediaDataHandler(request, response);
});
adminRouter.post(apis.getAllUsers, (request: GetAllUsersRequest, response: GetAllUsersResponse) => {
    return getAllUsersHandler(request, response);
});
adminRouter.post(apis.getSubscribers, (request: GetSubscribersRequest, response: GetSubscribersResponse) => {
    return getSubscribersHandler(request, response);
});
adminRouter.post(apis.createTempAdminUser, (request: CreateTempUserRequest, response: CreateTempUserResponse) => {
    return createTempUserHandler(request, response);
});
adminRouter.post(apis.updateUser, (request: UpdateUserRequest, response: UpdateUserResponse) => {
    return updateUserHandler(request, response);
});
adminRouter.post(apis.updateSiteConfigurations, (request: UpdateSiteConfigurationsRequest, response: UpdateSiteConfigurationsResponse) => {
    return updateSiteConfigurationsHandler(request, response);
});
adminRouter.post(apis.updateArticle, (request: UpdateArticleRequest, response: UpdateArticleResponse) => {
    return updateArticleHandler(request, response);
});
adminRouter.post(apis.createArticle, (request: CreateArticleRequest, response: CreateArticleResponse) => {
    return createArticleHandler(request, response);
});
adminRouter.post(apis.addArticleCategory, (request: AddArticleCategoryRequest, response: AddArticleCategoryResponse) => {
    return addArticleCategoryHandler(request, response);
});
adminRouter.post(apis.removeCategory, (request: RemoveCategoryRequest, response: RemoveCategoryResponse) => {
    return removeCategoryHandler(request, response);
});
adminRouter.post(apis.createAdvertiser, (request: CreateAdvertiserRequest, response: CreateAdvertiserResponse) => {
    return createAdvertiserHandler(request, response);
});
adminRouter.post(apis.updateAdvertiser, (request: UpdateAdvertiserRequest, response: UpdateAdvertiserResponse) => {
    return updateAdvertiserHandler(request, response);
});
adminRouter.post(apis.getAllAdvertisers, (request: GetAllAdvertisersRequest, response: GetAllAdvertisersResponse) => {
    return getAllAdvertisersHandler(request, response);
});
adminRouter.post(apis.createSponsor, (request: CreateSponsorRequest, response: CreateSponsorResponse) => {
    return createSponsorHandler(request, response);
});
adminRouter.post(apis.getAllSponsors, (request: GetAllSponsorsRequest, response: GetAllSponsorsResponse) => {
    return getAllSponsorsHandler(request, response);
});

/**
 * Default routes
 */
defaultRouter.post(apis.allArticles, (request: GetAllArticlesRequest, response: GetAllArticlesResponse) => {
    return getAllArticlesHandler(request, response);
});
defaultRouter.post(apis.getMeta, (request: GetMetaRequest, response: GetMetaResponse) => {
    return getMetaHandler(request, response);
});
defaultRouter.post(apis.getUser, (request: GetUserRequest, response: GetUserResponse) => {
    return getUserHandler(request, response);
});
defaultRouter.post(apis.addSubscriber, (request: AddSubscriberRequest, response: AddSubscriberResponse) => {
    return addSubscriberHandler(request, response);
});
defaultRouter.post(apis.addReaction, async (request: AddReactionRequest, response: AddReactionResponse) => {
    const meta = await getMeta();
    return addReactionHandler(request, response, meta);
});
defaultRouter.post(apis.removeReaction, (request: RemoveReactionRequest, response: RemoveReactionResponse) => {
    return removeReactionHandler(request, response);
});
defaultRouter.post(apis.getAllReactionsByArticleId, (request: GetAllReactionsByArticleIdRequest, response: GetAllReactionsByArticleIdResponse) => {
    return getAllReactionsByArticleIdHandler(request, response);
});
defaultRouter.get('/sitemap.xml', (request: Request, response: Response) => {
    return generateSitemapHandler(request, response);
});
defaultRouter.get('/rss/feed', (request: Request, response: Response) => {
    return generateRSSHandler(request, response);
});
defaultRouter.get('/robots.txt', async (request: Request, response: Response) => {
    const meta = await getMeta();
    response.type('text/plain');
    response.send("Sitemap: " + meta.siteConfigurations.domainName + "/sitemap.xml\nUser-agent: *\nDisallow:");
});
defaultRouter.get('/ads.txt', async (request: Request, response: Response) => {
    const meta = await getMeta();
    const adSenseId = meta.siteConfigurations.adsenseId.replace('ca-pub', 'pub');
    response.type('text/plain');
    response.send("google.com, " + adSenseId + ", DIRECT, f08c47fec0942fa0");
});
defaultRouter.get('/sellers.json', async (request: Request, response: Response) => {
    const meta = await getMeta();
    const adSenseId = meta.siteConfigurations.adsenseId.replace('ca-pub', 'pub');
    response.type('json');
    response.send({
        "sellerId": adSenseId,
        "sellerType": "PUBLISHER",
        "name": meta.siteConfigurations.siteTitle,
        "domain": meta.siteConfigurations.domainName.replace('https://www.', '').replace('www.', '')
    });
});

/**
 * Web routes
 */
webRouter.use('/public', express.static('dist/web/public'));
webRouter.get(['/artikkelit/:slug', '/articles/:slug'], async (request: Request, response: Response) => {
    try {
        const slug = request.params.slug;
        const meta = await getMeta();
        const article = await getArticleBySlug(slug).catch((e) => { throw new Error(e) });
        const sponsor: Sponsor = article.sponsorDocId ? await getSponsor(article.sponsorDocId) : null;
        const author = await getUserByUID(article.authorUID);
        let relatedArticles: Article[] = [];
        if(article.relatedArticles && article.relatedArticles.length) {
            for(let i = 0; i < article.relatedArticles.length; i++) {
                relatedArticles.push(await getArticleBySlug(article.relatedArticles[i]))
            }
        }
        response.send(articleView(meta, article, author, relatedArticles, sponsor));
    } catch (e) {
        response.status(404).send(e);
    }
});
webRouter.get(['/kategoriat/:slug', '/categories/:slug'], async (request: Request, response: Response) => {
    try {
        const slugParam = request.params.slug;
        const meta = await getMeta();
        const categories = meta.categories.articleCategories;
        const categoryToFind = categories.find(category => slug(category) == slugParam);
        const articles = await getArticlesByCategory(categoryToFind).catch((e) => { throw new Error(e) });
        response.send(categoryView(meta, articles, categoryToFind, slugParam));
    } catch (e) {
        response.status(404).send(JSON.stringify(e));
    }
});
webRouter.get('/redirect/:docId', async (request: Request, response: Response) => {
    const meta = await getMeta();
    const docId = request.params.docId;
    const docData: Advertiser = await getAdvertiser(docId);
    if (docData) response.redirect(docData.link);
    else response.status(404).send('NOT FOUND');
});
webRouter.get('/sw.js', async (request: Request, response: Response) => {
    const meta = await getMeta();
    const sw = generateSw(meta.siteConfigurations.sw || 'v1')
    response.type('.js').send(sw);
});
webRouter.get('/', async (request: Request, response: Response) => {
    try {
        const meta = await getMeta();
        const articles = await getAllArticles();
        response.send(homeView(meta, articles));
    } catch (e) {
        response.status(404).send(JSON.stringify(e));
    }
});

export {
    adminRouter,
    defaultRouter,
    webRouter
}