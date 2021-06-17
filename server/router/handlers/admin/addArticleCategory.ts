import { addArticleCategory } from '../../../db';
import { AddArticleCategoryRequest } from '../../../../models/requests';
import { AddArticleCategoryResponse, AddArticleCategoryResponseBody } from '../../../../models/responses';

/**
 * Handle addArticleCategory -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function addArticleCategoryHandler(request: AddArticleCategoryRequest, response: AddArticleCategoryResponse) {

    const status = await addArticleCategory(request.body.data);
    const responseData: AddArticleCategoryResponseBody = {
        status: status
    }
    
    response.status(200).send(responseData);
}