import { Response } from 'express';

export interface CreateTempUserResponse extends Response {
    body: CreateTempUserResponseBody
}

export interface CreateTempUserResponseBody {
    data?: any;
    status?: boolean;
}