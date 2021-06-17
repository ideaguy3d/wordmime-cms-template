import { Request } from 'express';
import { Article } from '../';

export interface UpdateArticleRequest extends Request {
    body: UpdateArticleRequestBody
}

export interface UpdateArticleRequestBody {
    /**
     * Article data
     */
    data: Article
}