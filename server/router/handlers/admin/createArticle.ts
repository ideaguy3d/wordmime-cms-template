import { createArticle } from '../../../db';
import { CreateArticleRequest } from '../../../../models/requests';
import { CreateArticleResponse, CreateArticleResponseBody } from '../../../../models/responses';

/**
 * Handle createArticle -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function createArticleHandler(request: CreateArticleRequest, response: CreateArticleResponse) {

    const status = await createArticle(request.body.data);
    const responseData: CreateArticleResponseBody = {
        status: status
    }
    
    response.status(200).send(responseData);
}