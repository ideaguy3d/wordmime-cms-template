import { removeCategory } from '../../../db';
import { RemoveCategoryRequest } from '../../../../models/requests';
import { AddArticleCategoryResponseBody, RemoveCategoryResponse, RemoveCategoryResponseBody } from '../../../../models/responses';

/**
 * Handle removeCategory -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function removeCategoryHandler(request: RemoveCategoryRequest, response: RemoveCategoryResponse) {

    const status = await removeCategory(request.body.data);
    const responseData: RemoveCategoryResponseBody = {
        status: status
    }
    
    response.status(200).send(responseData);
}