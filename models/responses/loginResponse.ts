import { Response } from 'express';
import { UserModel } from '../';

export interface LoginResponse extends Response {
    body: LoginResponseBody
}

export interface LoginResponseBody {
    data?: UserModel;
    status?: boolean;
}