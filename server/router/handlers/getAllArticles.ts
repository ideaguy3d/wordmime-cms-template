import { 
    getAllArticles
} from '../../db';
import { GetAllArticlesRequest } from '../../../models/requests';
import { GetAllArticlesResponse, GetAllArticlesResponseBody } from '../../../models/responses';

/**
 * Handle getAllArticles -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getAllArticlesHandler(request: GetAllArticlesRequest, response: GetAllArticlesResponse) {

    const articles = await getAllArticles();
    const responseData: GetAllArticlesResponseBody = {
        data: articles
    }
    
    response.status(200).send(responseData);
}