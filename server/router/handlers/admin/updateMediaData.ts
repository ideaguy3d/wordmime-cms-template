import { 
    updateMediaData
} from '../../../db';
import { UpdateMediaDataRequest } from '../../../../models/requests';
import { UpdateMediaDataResponse, UpdateMediaDataResponseBody } from '../../../../models/responses';

/**
 * Handle updateMediaData -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function updateMediaDataHandler(request: UpdateMediaDataRequest, response: UpdateMediaDataResponse) {

    const update = await updateMediaData(request.body.data);
    const responseData: UpdateMediaDataResponseBody = {
        status: update
    }
    
    response.status(200).send(responseData);
}