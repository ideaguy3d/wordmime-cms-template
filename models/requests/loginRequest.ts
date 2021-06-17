import { Request } from 'express';
import { User } from 'firebase';

export interface LoginRequest extends Request {
    body: LoginRequestBody
}

export interface LoginRequestBody {
    /**
     * Firebase user
     */
    data: User
}