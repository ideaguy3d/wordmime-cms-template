import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SponsorService } from '../../services/sponsor.service';
import { Media } from '../../../../../models';
import { MatDialog } from '@angular/material/dialog';
import { MediaSelectDialogComponent } from '../../components/media-select-dialog/media-select-dialog.component';

@Component({
  selector: 'sponsorAdd',
  templateUrl: './sponsor-add.component.html',
  styleUrls: ['./sponsor-add.component.scss']
})
export class SponsorAddComponent {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sponsorService: SponsorService,
    private router: Router,
    public dialog: MatDialog
  ){
    this.form = this.fb.group({
      title: new FormControl('', [
        Validators.required
      ]),
      imageSrc: new FormControl('', [
        Validators.required
      ]),
      html: new FormControl('', [
        
      ]),
      docId: new FormControl('', [
        
      ])
    });
  }

  selectSponsorImage() {
    const dialogRef = this.dialog.open(MediaSelectDialogComponent);

    dialogRef.afterClosed().subscribe((result: Media) => {
      if(result) this.form.get('imageSrc').setValue(result.downloadURL);
    });
  }

  async submit() {
    const randomId = Math.random().toString(36).substring(2);
    this.form.get('docId').setValue(randomId);
    await this.sponsorService.createSponsor(this.form.value);
    this.router.navigate(['/articles'])
  }
}
