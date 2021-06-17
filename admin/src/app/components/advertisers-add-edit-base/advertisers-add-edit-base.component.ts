import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  template: ''
})
export class AdvertisersAddEditBaseComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      advertiserName: new FormControl('', [
        Validators.required
      ]),
      link: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('link', [
        
      ]),
      docId: new FormControl('', [
        
      ]),
      title: new FormControl('', [
        Validators.required
      ]),
      redirect: new FormControl(false, [
        
      ]),
    });
  }
}
