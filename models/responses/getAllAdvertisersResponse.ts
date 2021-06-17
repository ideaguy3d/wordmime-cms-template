import { Response } from 'express';
import { Advertiser } from '..';

export interface GetAllAdvertisersResponse extends Response {
    body: GetAllAdvertisersResponseBody
}

export interface GetAllAdvertisersResponseBody {
    data?: Advertiser[];
    status?: boolean;
}