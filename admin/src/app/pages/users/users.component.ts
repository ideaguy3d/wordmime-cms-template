import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(
    public userService: UserService
  ) {
    if(!this.userService.users.value) this.userService.getAllUsers();
  }

  displayedColumns: string[] = ['photoURL', 'name', 'email', 'uid', 'role'];

}
