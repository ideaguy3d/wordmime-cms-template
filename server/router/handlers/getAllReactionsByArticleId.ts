import { 
    getAllReactionsByArticleId
} from '../../db';
import { GetAllReactionsByArticleIdRequest } from '../../../models/requests';
import { GetAllReactionsByArticleIdResponse, GetAllReactionsByArticleIdResponseBody } from '../../../models/responses';

/**
 * Handle getAllReactionsByArticleId -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getAllReactionsByArticleIdHandler(request: GetAllReactionsByArticleIdRequest, response: GetAllReactionsByArticleIdResponse) {
    
    const reactions = await getAllReactionsByArticleId(request.body.data);
    const responseData: GetAllReactionsByArticleIdResponseBody = {
        data: reactions
    }
    
    response.status(200).send(responseData);
}