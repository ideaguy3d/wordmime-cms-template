import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';

@Pipe({ name: 'user_pipe' })
export class UserPipe implements PipeTransform {
    constructor(
        private userService: UserService
    ) {
        
    }
    transform(uid: string) {
        const user = this.userService.users.value.find(user => user.uid == uid);
        return user;
    }
}