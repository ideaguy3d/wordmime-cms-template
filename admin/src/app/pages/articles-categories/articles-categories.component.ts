import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { ArticlesService } from 'src/app/services/articles.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'articles-categories',
  templateUrl: './articles-categories.component.html',
  styleUrls: ['./articles-categories.component.scss']
})
export class ArticlesCategoriesComponent {
  constructor(
      public settingsService: SettingsService,
      private articlesService: ArticlesService,
      private router: Router,
      public dialog: MatDialog,
      private translateService: TranslateService,
      private snackBar: MatSnackBar
  ) {
    if(!this.settingsService.meta.value) this.settingsService.getSettings();
  }
  async addCategory(category) {
    await this.articlesService.addArticleCategory(category);
    await this.settingsService.getSettings();
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this.translateService.get('snackbar_category_add').toPromise()
      }
    });
  }

  async removeCategory(category) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: await this.translateService.get('remove_category_dialog_title').toPromise(),
        description: await this.translateService.get('remove_category_dialog_description').toPromise(),
        cancel: await this.translateService.get('remove_category_dialog_cancel').toPromise(),
        submit: await this.translateService.get('remove_category_dialog_submit').toPromise()
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(!result) return;
      await this.articlesService.removeArticleCategory(category);
      await this.settingsService.getSettings();
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        data: {
          content: await this.translateService.get('snackbar_category_remove').toPromise()
        }
      });
    });
    
  }
}