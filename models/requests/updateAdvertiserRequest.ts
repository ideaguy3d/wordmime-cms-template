import { Request } from 'express';
import { Advertiser } from '../';

export interface UpdateAdvertiserRequest extends Request {
    body: UpdateAdvertiserRequestBody
}

export interface UpdateAdvertiserRequestBody {
    /**
     * Advertiser data
     */
    data: Advertiser
}