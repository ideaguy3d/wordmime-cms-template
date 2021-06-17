import { Request } from 'express';

export interface GetSubscribersRequest extends Request {
    body: GetSubscribersRequestBody
}

export interface GetSubscribersRequestBody {
    
}