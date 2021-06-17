import { removeReaction } from '../../db';
import { RemoveReactionRequest } from '../../../models/requests';
import { RemoveReactionResponse, RemoveReactionResponseBody } from '../../../models/responses';
import { auth } from '../../db/connection';

/**
 * Handle removeReaction -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function removeReactionHandler(request: RemoveReactionRequest, response: RemoveReactionResponse) {
    let responseData: RemoveReactionResponseBody = {}

    const user = await auth.getUser(request.body.uid);

    if(user && user.uid === request.body.uid && user.uid === request.body.data.uid) {
        const remove = await removeReaction(request.body.data.docId);
        responseData.status = remove;
        return response.status(200).send(responseData);
    }
    
    else {
        responseData.status = false;
        return response.status(400).send(responseData);
    }
    
}