import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { MediaService } from 'src/app/services/media.service';
import { Media } from '../../../../../models';
import { MediaAddEditBaseComponent } from '../../components/media-add-edit-base/media-add-edit-base.component';

@Component({
  selector: 'mediaEdit',
  templateUrl: './media-edit.component.html',
  styleUrls: ['./media-edit.component.scss']
})
export class MediaEditComponent extends MediaAddEditBaseComponent {

  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private mediaService: MediaService,
    private router: Router,
    private snackBar: MatSnackBar,
    private translateService: TranslateService,
    private route: ActivatedRoute
  ){
    super(
      _fb
    )
  }

  async ngOnInit() {
    const slug = await new Promise<string>((resolve, reject) => {
      this.route.params.subscribe(params => {
        resolve(params.slug)
      });
    });
    if(!this.mediaService.allMedia.value) await this.mediaService.getAllMedia();
    const mediaData = this.mediaService.allMedia.value.find(media => media.ref == slug);
    this.initializeForm(mediaData);
  }

  initializeForm(mediaData: Media) {
    this.form.get('ref').setValue(mediaData.ref);
    this.form.get('downloadURL').setValue(mediaData.downloadURL);
    this.form.get('title').setValue(mediaData.title);
    this.form.get('caption').setValue(mediaData.caption);
    this.form.get('type').setValue(mediaData.type);
    this.form.get('file').setValue('anything');
  }

  async submit() {
    this.form.disable();
    await this.mediaService.updateMedia(this.form.value);
    this.router.navigate(['/media']);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this.translateService.get('snackbar_media_update').toPromise()
      }
    });
  }
}
