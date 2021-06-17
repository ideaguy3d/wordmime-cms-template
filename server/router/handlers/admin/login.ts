import { 
    isEmpty,
    userCreate,
    getUserByEmail, 
    deleteUserByUid
} from '../../../db';
import { User } from 'firebase';
import { UserModel } from '../../../../models';
import { LoginResponse, LoginResponseBody } from '../../../../models/responses';
import { LoginRequest } from '../../../../models/requests';

/**
 * Handle login -request.
 * @param request - Express request
 * @param response  - Express response
 */
export async function loginHandler(request: LoginRequest, response: LoginResponse) {

    const user: User = request.body.data;
    let userData: UserModel = null;

    /**
     * Check for first ever login.
     * First ever login to the application will create a new admin user.
     */
    const empty = await isEmpty();
    if(empty) {
        // Create a new admin user
        const firstUserData: UserModel = {
            role: 10,
            email: '',
            firstLogin: true
        }
        userData = await userCreate(user, firstUserData);
    }
    /**
     * If users are found from database, we verify login for authorized admin user.
     */
    else {
        // Get users data from "users" -collection
        const tempUserData = await getUserByEmail(user.email);

        // User is a temporary admin-user, who just logged in. Update user data.
        if(tempUserData && tempUserData.role > 5 && !tempUserData.firstLogin) {
            // Remove temp user and create a real admin user
            await deleteUserByUid(tempUserData.uid);
            // Create a new admin user
            userData = await userCreate(user, tempUserData);
        } 
        
        // If user has already logged in, and has the admin role, authorize login
        else if(tempUserData && tempUserData.role > 5) {
            userData = tempUserData;
        }
    }

    const responseData: LoginResponseBody = {
        data: userData
    }
    
    response.status(200).send(responseData);
}