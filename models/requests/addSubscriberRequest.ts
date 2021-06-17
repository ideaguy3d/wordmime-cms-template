import { Request } from 'express';

export interface AddSubscriberRequest extends Request {
    body: AddSubscriberRequestBody
}

export interface AddSubscriberRequestBody {
    /**
     * Email string
     */
    data: string
}