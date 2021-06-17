import { Response } from 'express';
import { Sponsor } from '..';

export interface GetAllSponsorsResponse extends Response {
    body: GetAllSponsorsResponseBody
}

export interface GetAllSponsorsResponseBody {
    data?: Sponsor[];
    status?: boolean;
}