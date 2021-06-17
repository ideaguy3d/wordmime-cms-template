import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '../../services/settings.service';
import { UserService } from '../../services/user.service';
import { ArticlesAddEditBaseComponent } from '../../components/articles-add-edit-base/articles-add-edit-base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from '../../../../../models';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { SponsorService } from 'src/app/services/sponsor.service';


@Component({
  selector: 'articlesEdit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.scss']
})
export class ArticlesEditComponent extends ArticlesAddEditBaseComponent implements OnInit {

  form: FormGroup;
  initialized = false;
  articleDocId: string;
  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _translateService: TranslateService,
    public _settingsService: SettingsService,
    private _userService: UserService,
    private route: ActivatedRoute,
    private _articlesService: ArticlesService,
    public _sponsorService: SponsorService,
    private router: Router,
    private snackBar: MatSnackBar
  ){
    super(
      _fb,
      _dialog,
      _settingsService,
      _articlesService,
      _sponsorService,
      _userService,
      _translateService
    );
  }

  async ngOnInit() {
    const slug = await new Promise<string>((resolve, reject) => {
      this.route.params.subscribe(params => {
        resolve(params.slug)
      });
    });
    if(!this.articlesService.allArticles.value) await this.articlesService.getAllArticles();
    const articleData = this.articlesService.allArticles.value.find(article => article.slug == slug);
    this.articleDocId = articleData.docId;
    this.initializeForm(articleData);
  }
  initializeForm(articleData: Article) {
    this.form.get('articleImage').setValue(articleData.articleImage);
    this.form.get('title').setValue(articleData.title);
    this.form.get('slug').setValue(articleData.slug);
    this.form.get('slug').disable();
    this.form.get('description').setValue(articleData.description);
    this.initializeContents(articleData.content);
    this.form.get('categories').setValue(articleData.categories);
    this.form.get('relatedArticles').setValue(articleData.relatedArticles);
    this.form.get('sponsorDocId').setValue(articleData.sponsorDocId);
    this.form.get('externalLinkUrl').setValue(articleData.externalLinkUrl);
    this.form.get('externalLinkTitle').setValue(articleData.externalLinkTitle);
    this.initialized = true;
  }
  initializeContents(contents: Array<any>) {
    const formArray = this.form.get('content') as FormArray;
    contents.forEach(content => {
      let newContent: FormGroup;
      if (content.type == "heading") {
        newContent = this._fb.group({
          type: "heading",
          contents: [
            {
              value: content.contents,
              disabled: false
            },
            [
              Validators.required
            ]
          ],
        })
      }
      if (content.type == "text") {
        newContent = this._fb.group({
          type: "text",
          contents: [
            {
              value: content.contents,
              disabled: false
            },
            [
              Validators.required
            ]
          ]
        })
      }
      if (content.type == "image") {
        newContent = this._fb.group({
          type: "image",
          title: content.title ? content.title : '',
          caption: content.caption ? content.caption : '',
          contents: [
            {
              value: content.contents,
              disabled: false
            },
            [
              Validators.required
            ]
          ],
          description: [
            {
              value: content.description ? content.description : '',
              disabled: false
            }
          ],
        })
      }
      if(newContent) formArray.push(newContent);
    });
  }
  async submit() {
    this.form.get('edited').setValue(new Date());
    this.form.get('authorUID').setValue(this._userService.user.value.uid);
    let data: Article = this.form.value;
    delete data.created;
    delete data.published;
    data.docId = this.articleDocId;
    await this.articlesService.updateArticle(data);
    this.router.navigate(['/articles']);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this._translateService.get('snackbar_article_edit').toPromise()
      }
    });
  }
}
