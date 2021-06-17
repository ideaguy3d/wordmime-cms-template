import { Response } from 'express';

export interface UpdateAdvertiserResponse extends Response {
    body: UpdateAdvertiserResponseBody
}

export interface UpdateAdvertiserResponseBody {
    data?: any;
    status?: boolean;
}