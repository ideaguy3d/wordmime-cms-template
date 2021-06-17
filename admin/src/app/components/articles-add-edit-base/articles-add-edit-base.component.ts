import { Component, HostListener } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { SettingsService } from 'src/app/services/settings.service';
import { SponsorService } from 'src/app/services/sponsor.service';
import { UserService } from 'src/app/services/user.service';
import { Media } from '../../../../../models';
import { AdvertiserLinkBuildDialogComponent } from '../advertiser-link-build/advertiser-link-build-dialog.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MediaSelectDialogComponent } from '../media-select-dialog/media-select-dialog.component';

@Component({
  template: ''
})
export class ArticlesAddEditBaseComponent {

  @HostListener('window:beforeunload', ['$event']) 
  beforeunload($event) {
      return $event.returnValue='Your changes will not be saved';
  }

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public settingsService: SettingsService,
    public articlesService: ArticlesService,
    public sponsorService: SponsorService,
    private userService: UserService,
    private translateService: TranslateService
  ){
    if(!this.settingsService.meta.value) this.settingsService.getSettings();
    if(!this.sponsorService.allSponsors.value) this.sponsorService.getSponsors();
    if(!this.articlesService.allArticles.value) this.articlesService.getAllArticles();
    this.form = this.fb.group({
        articleImage: [
          {
            value: '',
            disabled: false
          },
          [
            Validators.required
          ]
        ],
        title: [
          {
            value: '',
            disabled: false
          },
          [
            Validators.required
          ]
        ],
        slug: [{
          value: '',
          disabled: false
        },
        [
          Validators.required
        ]
        ],
        description: [{
          value: '',
          disabled: false
        },
        [
          Validators.required
        ]
        ],
        published: new FormControl(),
        edited: new FormControl(),
        created: new FormControl(),
        authorUID: new FormControl(),
        content: new FormArray([]),
        categories: [
          {
            value: [],
            disabled: false
          },
          [
            Validators.required
          ]
        ],
        relatedArticles: [
          {
            value: [],
            disabled: false
          }
        ],
        sponsorDocId: new FormControl(),
        externalLinkUrl: new FormControl(),
        externalLinkTitle: new FormControl()
    });
  }
  addContent(type: "heading" | "text" | "image") {
    const content = this.form.get('content') as FormArray;
    let newContent: FormGroup;
    if (type == "heading") {
      newContent = this.fb.group({
        type: "heading",
        contents: [
          {
            value: '',
            disabled: false
          },
          [
            Validators.required
          ]
        ],
      })
    }
    if (type == "text") {
      newContent = this.fb.group({
        type: "text",
        contents: [
          {
            value: '',
            disabled: false
          },
          [
            Validators.required
          ]
        ]
      })
    }
    if (type == "image") {
      newContent = this.fb.group({
        type: "image",
        title: "",
        caption: "",
        contents: [
          {
            value: '',
            disabled: false
          },
          [
            Validators.required
          ]
        ],
        description: [
          {
            value: '',
            disabled: false
          },
          [
            Validators.required
          ]
        ]
      })
    }
    content.push(newContent);
  }
  async removeContent(i: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: await this.translateService.get('remove_content_dialog_title').toPromise(),
        description: await this.translateService.get('remove_content_dialog_description').toPromise(),
        cancel: await this.translateService.get('remove_content_dialog_cancel').toPromise(),
        submit: await this.translateService.get('remove_content_dialog_submit').toPromise()
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(!result) return;
      const content = this.form.get('content') as FormArray;
      content.removeAt(i);
    });
  }
  moveUp(i) {
    const content = this.form.get('content') as FormArray;
    const element = content.get(i.toString());
    content.removeAt(i);
    content.insert(i - 1, element);
  }
  moveDown(i) {
    const content = this.form.get('content') as FormArray;
    const element = content.get(i.toString());
    content.removeAt(i);
    content.insert(i + 1, element);
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  selectOGImage() {
    const dialogRef = this.dialog.open(MediaSelectDialogComponent);

    dialogRef.afterClosed().subscribe((result: Media) => {
      if(result) this.form.get('articleImage').setValue(result.downloadURL);
    });
  }
  selectContentImage(i) {
    const dialogRef = this.dialog.open(MediaSelectDialogComponent);

    dialogRef.afterClosed().subscribe((result: Media) => {
      if(result) {
        let imageContent = this.form.get('content').get(i.toString());
        imageContent.get('contents').setValue(result.downloadURL);
        imageContent.get('title').setValue(result.title);
        imageContent.get('caption').setValue(result.caption ? result.caption : '');
      }
    });
  }
  linkBuild() {
    this.dialog.open(AdvertiserLinkBuildDialogComponent, {
      data: this.form.value
    });
  }
  canDeactivate() {
    if(this.form.invalid) return window.confirm('Discard changes?');
    else return true;
  }
  relatedArticleChanged(e) {
    console.log(e);
  }
}
