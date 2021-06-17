import { createAdvertiser } from '../../../db';
import { CreateAdvertiserRequest } from '../../../../models/requests';
import { CreateAdvertiserResponse, CreateAdvertiserResponseBody } from '../../../../models/responses';

/**
 * Handle createAdvertiser -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function createAdvertiserHandler(request: CreateAdvertiserRequest, response: CreateAdvertiserResponse) {

    const status = await createAdvertiser(request.body.data);
    const responseData: CreateAdvertiserResponseBody = {
        status: status
    }
    
    response.status(200).send(responseData);
}