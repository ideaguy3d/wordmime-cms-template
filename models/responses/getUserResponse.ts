import { Response } from 'express';
import { UserModel } from '..';

export interface GetUserResponse extends Response {
    body: GetUserResponseBody
}

export interface GetUserResponseBody {
    data?: UserModel;
    status?: boolean;
}