import { Response } from 'express';

export interface UpdateSiteConfigurationsResponse extends Response {
    body: UpdateSiteConfigurationsResponseBody
}

export interface UpdateSiteConfigurationsResponseBody {
    data?: any;
    status?: boolean;
}