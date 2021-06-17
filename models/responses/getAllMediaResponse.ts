import { Response } from 'express';
import { Media } from '..';

export interface GetAllMediaResponse extends Response {
    body: GetAllMediaResponseBody
}

export interface GetAllMediaResponseBody {
    data?: Media[];
    status?: boolean;
}