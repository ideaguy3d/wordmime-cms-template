import { 
    updateSiteConfigurations
} from '../../../db';
import { UpdateSiteConfigurationsRequest } from '../../../../models/requests';
import { UpdateSiteConfigurationsResponse, UpdateSiteConfigurationsResponseBody } from '../../../../models/responses';

/**
 * Handle updateSiteConfigurations -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function updateSiteConfigurationsHandler(request: UpdateSiteConfigurationsRequest, response: UpdateSiteConfigurationsResponse) {

    const update = await updateSiteConfigurations(request.body.data);
    const responseData: UpdateSiteConfigurationsResponseBody = {
        status: update
    }
    
    response.status(200).send(responseData);
}