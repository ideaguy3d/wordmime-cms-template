import { Request } from 'express';

export interface AddArticleCategoryRequest extends Request {
    body: AddArticleCategoryRequestBody
}

export interface AddArticleCategoryRequestBody {
    /**
     * Category string
     */
    data: string
}