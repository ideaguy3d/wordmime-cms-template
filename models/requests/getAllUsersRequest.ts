import { Request } from 'express';

export interface GetAllUsersRequest extends Request {
    body: GetAllUsersRequestBody
}

export interface GetAllUsersRequestBody {
    
}