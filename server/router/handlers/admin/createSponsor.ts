import { createSponsor } from '../../../db';
import { CreateSponsorRequest } from '../../../../models/requests';
import { CreateSponsorResponse, CreateSponsorResponseBody } from '../../../../models/responses';

/**
 * Handle createSponsor -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function createSponsorHandler(request: CreateSponsorRequest, response: CreateSponsorResponse) {

    const status = await createSponsor(request.body.data);
    const responseData: CreateSponsorResponseBody = {
        status: status
    }
    
    response.status(200).send(responseData);
}