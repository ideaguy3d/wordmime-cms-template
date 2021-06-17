import { 
    addReaction, getArticleById
} from '../../db';
import { AddReactionRequest } from '../../../models/requests';
import { AddReactionResponse, AddReactionResponseBody } from '../../../models/responses';
import { auth } from '../../db/connection';
import { sendEmail } from '../../utils/sendEmail';
import { EmailSend, Meta } from '../../../models';

/**
 * Handle addReaction -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function addReactionHandler(request: AddReactionRequest, response: AddReactionResponse, meta: Meta) {
    let responseData: AddReactionResponseBody = {}

    const user = await auth.getUser(request.body.uid);

    /**
     * Validate that user with given UID exists and it matches the one in request body and reaction data
     */
    if(user && user.uid === request.body.uid) {
        const articleData = await getArticleById(request.body.data.articleId)
        const emailSendData: EmailSend = {
            to: meta.siteConfigurations.adminEmail,
            from: meta.siteConfigurations.adminEmail,
            subject: 'New comment: ' +  meta.siteConfigurations.siteName,
            text: '',
            html: `User: ${user.displayName}<br>Email: ${user.email}<br>Article: ${articleData.title}<br>Message: ${request.body.data.html}`
        }
        const add = await addReaction(request.body.data);
        await sendEmail(emailSendData, meta);
        responseData.status = add;
        
        return response.status(200).send(responseData);
    }

    else {
        responseData.status = false;
        return response.status(400).send(responseData);
    }
}