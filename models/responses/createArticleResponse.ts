import { Response } from 'express';

export interface CreateArticleResponse extends Response {
    body: CreateArticleResponseBody
}

export interface CreateArticleResponseBody {
    data?: any;
    status?: boolean;
}