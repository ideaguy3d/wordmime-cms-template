export interface UserModel {
    role: number;
    displayName?: string;
    email: string;
    marketing?: boolean;
    photoURL?: string;
    uid?: string;
    firstLogin: boolean;
}