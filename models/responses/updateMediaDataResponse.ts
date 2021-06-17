import { Response } from 'express';

export interface UpdateMediaDataResponse extends Response {
    body: UpdateMediaDataResponseBody
}

export interface UpdateMediaDataResponseBody {
    data?: any;
    status?: boolean;
}