import { 
    saveMediaData
} from '../../../db';
import { SaveMediaDataRequest } from '../../../../models/requests';
import { SaveMediaDataResponse, SaveMediaDataResponseBody } from '../../../../models/responses';

/**
 * Handle saveMediaData -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function saveMediaDataHandler(request: SaveMediaDataRequest, response: SaveMediaDataResponse) {

    const save = await saveMediaData(request.body.data);
    const responseData: SaveMediaDataResponseBody = {
        status: save
    }
    
    response.status(200).send(responseData);
}