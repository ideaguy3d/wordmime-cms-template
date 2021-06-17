import { 
    getAllSponsors
} from '../../../db';
import { GetAllSponsorsRequest } from '../../../../models/requests';
import { GetAllSponsorsResponse, GetAllSponsorsResponseBody } from '../../../../models/responses';

/**
 * Handle getAllSponsors -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getAllSponsorsHandler(request: GetAllSponsorsRequest, response: GetAllSponsorsResponse) {

    const sponsors = await getAllSponsors();
    const responseData: GetAllSponsorsResponseBody = {
        data: sponsors
    }
    
    response.status(200).send(responseData);
}