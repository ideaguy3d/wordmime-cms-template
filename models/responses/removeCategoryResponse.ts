import { Response } from 'express';

export interface RemoveCategoryResponse extends Response {
    body: RemoveCategoryResponseBody
}

export interface RemoveCategoryResponseBody {
    data?: any;
    status?: boolean;
}