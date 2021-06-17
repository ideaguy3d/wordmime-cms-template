import { Response } from 'express';

export interface AddSubscriberResponse extends Response {
    body: AddSubscriberResponseBody
}

export interface AddSubscriberResponseBody {
    data?: any;
    status?: boolean;
}