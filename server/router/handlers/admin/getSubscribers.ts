import { 
    getSubscribers
} from '../../../db';
import { Request, Response } from 'express';
import { GetSubscribersRequest } from '../../../../models/requests';
import { GetSubscribersResponse, GetSubscribersResponseBody } from '../../../../models/responses';

/**
 * Handle getSubscribers -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getSubscribersHandler(request: GetSubscribersRequest, response: GetSubscribersResponse) {

    const subscribers = await getSubscribers();
    const responseData: GetSubscribersResponseBody = {
        data: subscribers
    }
    
    response.status(200).send(responseData);
}