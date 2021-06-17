import { Response } from 'express';

export interface UpdateArticleResponse extends Response {
    body: UpdateArticleResponseBody
}

export interface UpdateArticleResponseBody {
    data?: any;
    status?: boolean;
}