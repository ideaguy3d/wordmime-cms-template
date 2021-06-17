import { Request } from 'express';

export interface RemoveCategoryRequest extends Request {
    body: RemoveCategoryRequestBody
}

export interface RemoveCategoryRequestBody {
    /**
     * Category string
     */
    data: string
}