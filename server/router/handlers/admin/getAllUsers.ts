import { 
    getAllUsers
} from '../../../db';
import { Request, Response } from 'express';
import { GetAllUsersRequest } from '../../../../models/requests';
import { GetAllUsersResponse, GetAllUsersResponseBody } from '../../../../models/responses';

/**
 * Handle getAllUsers -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getAllUsersHandler(request: GetAllUsersRequest, response: GetAllUsersResponse) {

    const users = await getAllUsers();
    const responseData: GetAllUsersResponseBody = {
        data: users
    }
    
    response.status(200).send(responseData);
}