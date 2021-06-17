import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { MediaService } from 'src/app/services/media.service';
import { MediaAddEditBaseComponent } from '../../components/media-add-edit-base/media-add-edit-base.component';

@Component({
  selector: 'mediaAdd',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.scss']
})
export class MediaAddComponent extends MediaAddEditBaseComponent {

  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private mediaService: MediaService,
    private router: Router,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ){
    super(
      _fb
    )
  }

  addFile(event) {
    const file = event.target.files[0] as File;
    this.form.get('file').setValue(file);
    this.form.get('ref').setValue(file.name);
  }

  async submit() {
    this.form.disable();
    await this.mediaService.uploadMedia(this.form.value);
    this.router.navigate(['/media']);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this.translateService.get('snackbar_media_add').toPromise()
      }
    });
  }
}
