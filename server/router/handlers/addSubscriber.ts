import { 
    addSubscriber
} from '../../db';
import { AddSubscriberRequest } from '../../../models/requests';
import { AddSubscriberResponse, AddSubscriberResponseBody } from '../../../models/responses';

/**
 * Handle addSubscriber -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function addSubscriberHandler(request: AddSubscriberRequest, response: AddSubscriberResponse) {

    const add = await addSubscriber(request.body.data);
    const responseData: AddSubscriberResponseBody = {
        status: add
    }
    
    response.status(200).send(responseData);
}