import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '../../services/settings.service';
import { UserService } from '../../services/user.service';
import { ArticlesAddEditBaseComponent } from '../../components/articles-add-edit-base/articles-add-edit-base.component';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'articlesAdd',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.scss']
})
export class ArticlesAddComponent extends ArticlesAddEditBaseComponent {

  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    public _settingsService: SettingsService,
    private _userService: UserService,
    private _translateService: TranslateService,
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
    )
  }
  async submit() {
    this.form.get('authorUID').setValue(this._userService.user.value.uid);
    await this._articlesService.createArticle(this.form.value);
    this.router.navigate(['/articles']);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this._translateService.get('snackbar_article_add').toPromise()
      }
    });
  }
}
