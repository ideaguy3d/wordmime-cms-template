import { Response } from 'express';

export interface AddArticleCategoryResponse extends Response {
    body: AddArticleCategoryResponseBody
}

export interface AddArticleCategoryResponseBody {
    data?: any;
    status?: boolean;
}