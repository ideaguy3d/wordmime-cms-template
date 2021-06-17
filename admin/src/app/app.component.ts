import { ApplicationRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navOpen = true;
  constructor(
    translate: TranslateService,
    public userService: UserService,
    private ref: ApplicationRef
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  }

  toggleNav(e) {
    this.navOpen = e;
    this.ref.tick();
  }
}
