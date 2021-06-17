import { 
    userTempCreate
} from '../../../db';
import { CreateTempUserRequest } from '../../../../models/requests';
import { CreateTempUserResponse, CreateTempUserResponseBody } from '../../../../models/responses';

/**
 * Handle createTempAdminUser -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function createTempUserHandler(request: CreateTempUserRequest, response: CreateTempUserResponse) {

    const status = await userTempCreate(request.body.data.email, request.body.data.role);
    const responseData: CreateTempUserResponseBody = {
        status: status
    }
    
    response.status(200).send(responseData);
}