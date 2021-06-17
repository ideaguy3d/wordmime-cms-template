import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'usersAdd',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  form: FormGroup;
  roles = null;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private translateService: TranslateService
  ){
    this.form = this.fb.group({
      addUser_email: new FormControl('', [
        Validators.required
      ]),
      addUser_role: new FormControl(6, [
        Validators.required
      ]),
    });
  }
  async ngOnInit() {
    /**
     * Initialize roles
     */
    const role6name = await this.translateService.get('role_6_name').toPromise();
    const role7name = await this.translateService.get('role_7_name').toPromise();
    const role10name = await this.translateService.get('role_10_name').toPromise();
    this.roles = [
      {
        level: 6,
        name: role6name
      },
      {
        level: 7,
        name: role7name
      },
      {
        level: 10,
        name: role10name
      }
    ]
  }
  async submit() {
    const value = this.form.value;
    const create: any = await this.userService.createTempUser(value.addUser_email, value.addUser_role);
    if(create.status) this.router.navigate(['/users']);
  }
}
