import { 
    getUserByUID,
    getUserByEmail
} from '../../db';
import { Request, Response } from 'express';
import { UserModel } from '../../../models';
import { GetUserRequest } from '../../../models/requests';
import { GetUserResponse, GetUserResponseBody } from '../../../models/responses';

/**
 * Handle getUser -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function getUserHandler(request: GetUserRequest, response: GetUserResponse) {

    let user: UserModel;

    if(request.body.data.uid) user = await getUserByUID(request.body.data.uid);
    else if(request.body.data.email) user = await getUserByEmail(request.body.data.email);
    else user = null;
    
    const responseData: GetUserResponseBody = {
        data: user
    }
    
    response.status(200).send(responseData);
}