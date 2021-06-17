import { 
    updateAdvertiser
} from '../../../db';
import { UpdateAdvertiserRequest } from '../../../../models/requests';
import { UpdateAdvertiserResponse, UpdateAdvertiserResponseBody } from '../../../../models/responses';

/**
 * Handle updateAdvertiser -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function updateAdvertiserHandler(request: UpdateAdvertiserRequest, response: UpdateAdvertiserResponse) {

    const update = await updateAdvertiser(request.body.data);
    const responseData: UpdateAdvertiserResponseBody = {
        status: update
    }
    
    response.status(200).send(responseData);
}