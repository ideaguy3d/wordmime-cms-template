import { Response } from 'express';
import { Article } from '..';

export interface GetAllArticlesResponse extends Response {
    body: GetAllArticlesResponseBody
}

export interface GetAllArticlesResponseBody {
    data?: Article[];
    status?: boolean;
}