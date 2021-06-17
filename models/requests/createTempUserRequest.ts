import { Request } from 'express';

export interface CreateTempUserRequest extends Request {
    body: CreateTempUserRequestBody
}

export interface CreateTempUserRequestBody {
    data: {
        email: string,
        role: number
    }
}