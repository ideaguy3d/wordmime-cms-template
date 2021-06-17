import { Response } from 'express';

export interface CreateSponsorResponse extends Response {
    body: CreateSponsorResponseBody
}

export interface CreateSponsorResponseBody {
    data?: any;
    status?: boolean;
}