import { 
    getAllAdvertisers
} from '../../../db';
import { GetAllAdvertisersRequest } from '../../../../models/requests';
import { GetAllAdvertisersResponse, GetAllAdvertisersResponseBody } from '../../../../models/responses';

/**
 * Handle getAllAdvertisers -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getAllAdvertisersHandler(request: GetAllAdvertisersRequest, response: GetAllAdvertisersResponse) {

    const advertisers = await getAllAdvertisers();
    const responseData: GetAllAdvertisersResponseBody = {
        data: advertisers
    }
    
    response.status(200).send(responseData);
}