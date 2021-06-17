import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { MediaSelectDialogComponent } from 'src/app/components/media-select-dialog/media-select-dialog.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { UserService } from 'src/app/services/user.service';
import { Media } from '../../../../../models';
import { UserModel } from '../../../../../models/user';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ){
    this.initializeForm();
  }
  async initializeForm() {
    const user = await new Promise<UserModel>((resolve, reject) => {
      this.userService.user.subscribe(userData => {
        if(userData) resolve(userData);
      })
    });
    this.form = this.fb.group({
      photoURL: new FormControl(user.photoURL, [
        Validators.required
      ]),
      email: new FormControl(
        {
          value: user.email,
          disabled: true
        }, [
        Validators.required
      ]),
      displayName: new FormControl(user.displayName, [
        Validators.required
      ]),
    });
  }
  async submit() {
    let value = this.form.value;
    value.uid = this.userService.user.value.uid;
    await this.userService.updateUser(value);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this.translateService.get('snackbar_user_save').toPromise()
      }
    });
  }

  selectProfileImg() {
    const dialogRef = this.dialog.open(MediaSelectDialogComponent);

    dialogRef.afterClosed().subscribe((result: Media) => {
      if(result) this.form.get('photoURL').setValue(result.downloadURL);
    });
  }
}
