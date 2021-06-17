import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertisersAddEditBaseComponent } from 'src/app/components/advertisers-add-edit-base/advertisers-add-edit-base.component';
import { AdvertiserService } from '../../services/advertiser.service';

@Component({
  selector: 'advertisersAdd',
  templateUrl: './advertisers-add.component.html',
  styleUrls: ['./advertisers-add.component.scss']
})
export class AdvertiserAddComponent extends AdvertisersAddEditBaseComponent {

  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private advertiserService: AdvertiserService,
    private router: Router
  ){
    super(
      _fb
    )
  }

  async submit() {
    const randomId = Math.random().toString(36).substring(2);
    this.form.get('docId').setValue(randomId);
    await this.advertiserService.createAdvertiser(this.form.value);
    this.router.navigate(['/articles'])
  }
}
