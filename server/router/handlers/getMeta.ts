import { 
    getMeta
} from '../../db';
import { GetMetaRequest } from '../../../models/requests';
import { GetMetaResponse, GetMetaResponseBody } from '../../../models/responses';

/**
 * Handle getMeta -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getMetaHandler(request: GetMetaRequest, response: GetMetaResponse) {

    const meta = await getMeta();
    const responseData: GetMetaResponseBody = {
        data: meta
    }
    
    response.status(200).send(responseData);
}