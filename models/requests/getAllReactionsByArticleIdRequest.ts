import { Request } from 'express';

export interface GetAllReactionsByArticleIdRequest extends Request {
    body: GetAllReactionsByArticleIdRequestBody
}

export interface GetAllReactionsByArticleIdRequestBody {
    /**
     * Article id
     */
    data: string;
}