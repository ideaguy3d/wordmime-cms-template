import { Request } from 'express';
import { Media } from '../';

export interface SaveMediaDataRequest extends Request {
    body: SaveMediaDataRequestBody
}

export interface SaveMediaDataRequestBody {
    /**
     * Media data
     */
    data: Media
}