import { Response } from 'express';

export interface CreateAdvertiserResponse extends Response {
    body: CreateAdvertiserResponseBody
}

export interface CreateAdvertiserResponseBody {
    data?: any;
    status?: boolean;
}