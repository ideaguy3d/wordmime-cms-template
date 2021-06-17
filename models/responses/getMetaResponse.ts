import { Response } from 'express';
import { Meta } from '..';

export interface GetMetaResponse extends Response {
    body: GetMetaResponseBody
}

export interface GetMetaResponseBody {
    data?: Meta;
    status?: boolean;
}