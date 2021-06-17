import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginSubscription: Subscription;

  constructor(
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginSubscription = this.userService.user.subscribe(user => {
      if(user) this.router.navigate(['articles']);
    })
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

}