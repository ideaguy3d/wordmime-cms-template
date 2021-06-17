import { ApplicationRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navOpen = true;
  @Output() navEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public userService: UserService,
    public ref: ApplicationRef
  ) {}

  toggleNav() {
    this.navEmitter.emit(!this.navOpen);
    this.navOpen = !this.navOpen;
  }

}