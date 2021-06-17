import { Response } from 'express';
import { Subscriber } from '..';

export interface GetSubscribersResponse extends Response {
    body: GetSubscribersResponseBody
}

export interface GetSubscribersResponseBody {
    data?: Subscriber[];
    status?: boolean;
}