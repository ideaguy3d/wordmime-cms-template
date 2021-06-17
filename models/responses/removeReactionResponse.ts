import { Response } from 'express';

export interface RemoveReactionResponse extends Response {
    body: RemoveReactionResponseBody
}

export interface RemoveReactionResponseBody {
    data?: any;
    status?: boolean;
}