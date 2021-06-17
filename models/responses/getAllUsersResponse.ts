import { Response } from 'express';
import { UserModel } from '..';

export interface GetAllUsersResponse extends Response {
    body: GetAllUsersResponseBody
}

export interface GetAllUsersResponseBody {
    data?: UserModel[];
    status?: boolean;
}