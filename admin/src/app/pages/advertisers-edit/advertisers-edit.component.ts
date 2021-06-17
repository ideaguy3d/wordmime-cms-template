import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisersAddEditBaseComponent } from 'src/app/components/advertisers-add-edit-base/advertisers-add-edit-base.component';
import { Advertiser } from '../../../../../models';
import { AdvertiserService } from '../../services/advertiser.service';
import { TranslateService } from '@ngx-translate/core';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'advertisersEdit',
  templateUrl: './advertisers-edit.component.html',
  styleUrls: ['./advertisers-edit.component.scss']
})
export class AdvertiserEditComponent extends AdvertisersAddEditBaseComponent {

  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private advertiserService: AdvertiserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
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
    if(!this.advertiserService.allAdvertisers.value) await this.advertiserService.getAdvertisers();
    const advertiserData = this.advertiserService.allAdvertisers.value.find(advertiser => advertiser.docId == slug);
    this.initializeForm(advertiserData);
  }

  initializeForm(advertiserData: Advertiser) {
    this.form.get('docId').setValue(advertiserData.docId);
    this.form.get('type').setValue(advertiserData.type);
    this.form.get('title').setValue(advertiserData.title);
    this.form.get('link').setValue(advertiserData.link);
    this.form.get('redirect').setValue(advertiserData.redirect);
    this.form.get('advertiserName').setValue(advertiserData.advertiserName);
  }

  async submit() {
    this.form.disable();
    await this.advertiserService.updateAdvertiser(this.form.value);
    this.router.navigate(['/advertisers']);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this.translateService.get('snackbar_advertiser_update').toPromise()
      }
    });
  }
}
