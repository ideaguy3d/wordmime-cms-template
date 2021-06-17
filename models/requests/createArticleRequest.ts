import { Article } from '../';
import { Request } from 'express';

export interface CreateArticleRequest extends Request {
    body: CreateArticleRequestBody
}

export interface CreateArticleRequestBody {
    /**
     * Article data
     */
    data: Article
}