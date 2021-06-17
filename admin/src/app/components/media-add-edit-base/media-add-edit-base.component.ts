import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  template: ''
})
export class MediaAddEditBaseComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      file: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('image', [
        Validators.required
      ]),
      downloadURL: new FormControl('', [
        
      ]),
      ref: new FormControl('', [
        
      ]),
      title: new FormControl('', [
        Validators.required
      ]),
      caption: new FormControl('', [
        Validators.required
      ])
    });
  }
}
