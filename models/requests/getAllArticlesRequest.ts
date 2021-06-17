import { Request } from 'express';

export interface GetAllArticlesRequest extends Request {
    body: GetAllArticlesRequestBody
}

export interface GetAllArticlesRequestBody {
    
}