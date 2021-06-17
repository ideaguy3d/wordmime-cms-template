import { Request } from 'express';
import { Sponsor } from '../';

export interface CreateSponsorRequest extends Request {
    body: CreateSponsorRequestBody
}

export interface CreateSponsorRequestBody {
    /**
     * Sponsor data
     */
    data: Sponsor
}