import { Response } from 'express';

export interface AddReactionResponse extends Response {
    body: AddReactionResponseBody
}

export interface AddReactionResponseBody {
    data?: any;
    status?: boolean;
}