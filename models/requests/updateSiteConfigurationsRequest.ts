import { Request } from 'express';
import { SiteConfiguration } from '../';

export interface UpdateSiteConfigurationsRequest extends Request {
    body: UpdateSiteConfigurationsRequestBody
}

export interface UpdateSiteConfigurationsRequestBody {
    /**
     * Site configuration data
     */
    data: SiteConfiguration
}