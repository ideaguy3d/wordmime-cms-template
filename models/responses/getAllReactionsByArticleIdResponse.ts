import { Response } from 'express';
import { Reaction } from '..';

export interface GetAllReactionsByArticleIdResponse extends Response {
    body: GetAllReactionsByArticleIdResponseBody
}

export interface GetAllReactionsByArticleIdResponseBody {
    data?: Reaction[];
    status?: boolean;
}