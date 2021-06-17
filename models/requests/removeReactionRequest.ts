import { Request } from 'express';
import { Reaction } from '..';

export interface RemoveReactionRequest extends Request {
    body: RemoveReactionRequestBody
}

export interface RemoveReactionRequestBody {
    /**
     * Reaction docId string
     */
    data: Reaction,
    /**
     * User uid
     */
    uid: string
}