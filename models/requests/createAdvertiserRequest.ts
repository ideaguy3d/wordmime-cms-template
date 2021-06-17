import { Request } from 'express';
import { Advertiser } from '../';

export interface CreateAdvertiserRequest extends Request {
    body: CreateAdvertiserRequestBody
}

export interface CreateAdvertiserRequestBody {
    /**
     * Advertiser data
     */
    data: Advertiser
}