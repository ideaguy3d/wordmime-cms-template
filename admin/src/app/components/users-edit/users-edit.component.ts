import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'usersEdit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
    });
  }
  submit() {
    const value = this.form.value;
  }
}
