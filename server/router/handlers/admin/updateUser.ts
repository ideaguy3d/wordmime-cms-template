import { updateUser } from '../../../db';
import { Request, Response } from 'express';
import { UpdateUserRequest } from '../../../../models/requests';
import { UpdateUserResponse, UpdateUserResponseBody } from '../../../../models/responses';

/**
 * Handle updateUser -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function updateUserHandler(request: UpdateUserRequest, response: UpdateUserResponse) {

    const update = await updateUser(request.body.data);
    const responseData: UpdateUserResponseBody = {
        status: update
    }
    
    response.status(200).send(responseData);
}