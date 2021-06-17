import { Response } from 'express';

export interface UpdateUserResponse extends Response {
    body: UpdateUserResponseBody
}

export interface UpdateUserResponseBody {
    data?: any;
    status?: boolean;
}