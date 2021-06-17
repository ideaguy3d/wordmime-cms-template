import { Request } from 'express';
import { Media } from '../';

export interface UpdateMediaDataRequest extends Request {
    body: UpdateMediaDataRequestBody
}

export interface UpdateMediaDataRequestBody {
    /**
     * Media data
     */
    data: Media
}