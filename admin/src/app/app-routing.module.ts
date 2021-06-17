import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './pages/login/login.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MediaComponent } from './pages/media/media.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { ArticlesEditComponent } from './pages/articles-edit/articles-edit.component';
import { ArticlesAddComponent } from './pages/articles-add/articles-add.component';
import { MediaAddComponent } from './pages/media-add/media-add.component';
import { ArticlesCategoriesComponent } from './pages/articles-categories/articles-categories.component';
import { AdvertiserAddComponent } from './pages/advertisers-add/advertisers-add.component';
import { SponsorAddComponent } from './pages/sponsor-add/sponsor-add.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { MediaEditComponent } from './pages/media-edit/media-edit.component';
import { AdvertiserEditComponent } from './pages/advertisers-edit/advertisers-edit.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['articles']);

const routes: Routes = [
  {
    component: SponsorAddComponent,
    path: 'sponsor/add',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: AdvertiserAddComponent,
    path: 'advertiser/add',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: AdvertiserEditComponent,
    path: 'advertiser/edit/:slug',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    canDeactivate: [ CanDeactivateGuard ]
  },
  {
    component: MediaAddComponent,
    path: 'media/add',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: MediaEditComponent,
    path: 'media/edit/:slug',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    canDeactivate: [ CanDeactivateGuard ]
  },
  {
    component: ArticlesAddComponent,
    path: 'articles/add',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    canDeactivate: [ CanDeactivateGuard ]
  },
  {
    component: ArticlesCategoriesComponent,
    path: 'articles/categories',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: ArticlesEditComponent,
    path: 'articles/edit/:slug',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    canDeactivate: [ CanDeactivateGuard ]
  },
  {
    component: UsersAddComponent,
    path: 'users/add',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: UsersComponent,
    path: 'users',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: SubscribersComponent,
    path: 'subscribers',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: MediaComponent,
    path: 'media',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: ProfileComponent,
    path: 'profile',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: ArticlesComponent,
    path: 'articles',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: AdvertisersComponent,
    path: 'advertisers',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: SettingsComponent,
    path: 'settings',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: DashboardComponent,
    path: 'dashboard',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: LoginComponent,
    path: '**',
    canActivate: [ AngularFireAuthGuard ],
    data: { authGuardPipe: redirectLoggedInToDashboard }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
