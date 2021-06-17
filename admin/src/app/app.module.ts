/**
 * General
 */
import { environment } from '../environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/**
 * Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatRadioModule } from '@angular/material/radio';

/**
 * Services
 */
import { UserService } from './services/user.service';
import { ArticlesService } from './services/articles.service';
import { SettingsService } from './services/settings.service';
import { MediaService } from './services/media.service';
import { AdvertiserService } from './services/advertiser.service';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { SubscriberService } from './services/subscriber.service';
import { SponsorService } from './services/sponsor.service';

/**
 * Angular Material
 */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

/**
 * Pages / Components / Pipes
 */
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArticlesAddComponent } from './pages/articles-add/articles-add.component';
import { ArticlesEditComponent } from './pages/articles-edit/articles-edit.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MediaComponent } from './pages/media/media.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { MediaAddComponent } from './pages/media-add/media-add.component';
import { MediaEditComponent } from './pages/media-edit/media-edit.component';
import { TimePipe } from './pipes/time.pipe';
import { MediaSelectDialogComponent } from './components/media-select-dialog/media-select-dialog.component';
import { ArticlesCategoriesComponent } from './pages/articles-categories/articles-categories.component';
import { AdvertiserAddComponent } from './pages/advertisers-add/advertisers-add.component';
import { AdvertiserEditComponent } from './pages/advertisers-edit/advertisers-edit.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { SponsorAddComponent } from './pages/sponsor-add/sponsor-add.component';
import { AdvertiserLinkBuildDialogComponent } from './components/advertiser-link-build/advertiser-link-build-dialog.component';
import { UserPipe } from './pipes/user.pipe';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MediaPipe } from './pipes/media.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/langs/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SettingsComponent,
    LoginComponent,
    ArticlesComponent,
    UsersComponent,
    ProfileComponent,
    ArticlesAddComponent,
    ArticlesEditComponent,
    SidenavComponent,
    MediaComponent,
    UsersAddComponent,
    UsersEditComponent,
    MediaAddComponent,
    MediaEditComponent,
    DialogComponent,
    SnackbarComponent,
    TimePipe,
    UserPipe,
    MediaPipe,
    MediaSelectDialogComponent,
    ArticlesCategoriesComponent,
    AdvertiserAddComponent,
    AdvertisersComponent,
    AdvertiserEditComponent,
    AdvertiserLinkBuildDialogComponent,
    SubscribersComponent,
    SponsorAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ArticlesService,
    SettingsService,
    MediaService,
    AdvertiserService,
    CanDeactivateGuard,
    SubscriberService,
    SponsorService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
