import { Request } from 'express';
import { Reaction } from '../reaction';

export interface AddReactionRequest extends Request {
    body: AddReactionRequestBody
}

export interface AddReactionRequestBody {
    /**
     * Reaction data
     */
    data: Reaction,
    /**
     * User uid
     */
    uid: string
}