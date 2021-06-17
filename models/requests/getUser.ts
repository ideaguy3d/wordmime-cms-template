import { Request } from 'express';

export interface GetUserRequest extends Request {
    body: GetUserRequestBody
}

export interface GetUserRequestBody {
    data: {
        /**
         * UID of user to get
         */
        uid?: string;
        /**
         * Email of user to get
         */
        email?: string;
    }
}