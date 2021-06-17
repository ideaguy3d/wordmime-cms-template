import { Response } from 'express';

export interface SaveMediaDataResponse extends Response {
    body: SaveMediaDataResponseBody
}

export interface SaveMediaDataResponseBody {
    data?: any;
    status?: boolean;
}