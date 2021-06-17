import { 
    getAllMedia
} from '../../../db';
import { GetAllMediaRequest } from '../../../../models/requests';
import { GetAllMediaResponse, GetAllMediaResponseBody } from '../../../../models/responses';

/**
 * Handle getAllMedia -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getAllMediaHandler(request: GetAllMediaRequest, response: GetAllMediaResponse) {

    const media = await getAllMedia();
    const responseData: GetAllMediaResponseBody = {
        data: media
    }
    
    response.status(200).send(responseData);
}