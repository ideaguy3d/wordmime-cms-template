import { Request } from 'express';
import { UserModel } from '../';

export interface UpdateUserRequest extends Request {
    body: UpdateUserRequestBody
}

export interface UpdateUserRequestBody {
    /**
     * User data
     */
    data: UserModel
}