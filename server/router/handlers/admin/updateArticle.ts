import { updateArticle } from '../../../db';
import { Request, Response } from 'express';
import { UpdateArticleRequest } from '../../../../models/requests';
import { UpdateArticleResponse, UpdateArticleResponseBody } from '../../../../models/responses';

/**
 * Handle updateArticle -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function updateArticleHandler(request: UpdateArticleRequest, response: UpdateArticleResponse) {

    const update = await updateArticle(request.body.data);
    const responseData: UpdateArticleResponseBody = {
        status: update
    }
    
    response.status(200).send(responseData);
}