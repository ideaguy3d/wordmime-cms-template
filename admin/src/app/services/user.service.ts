import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserModel } from '../../../../models/user';
import { CreateTempUserRequestBody, GetAllUsersRequestBody, GetUserRequestBody, LoginRequestBody, UpdateUserRequestBody } from '../../../../models/requests';
import { CreateTempUserResponseBody, GetAllUsersResponseBody, GetUserResponseBody, LoginResponseBody, UpdateUserResponseBody } from '../../../../models/responses';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { apis } from '../../../../config/apis';
import { SettingsService } from './settings.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<UserModel> = new BehaviorSubject(null);
  users: BehaviorSubject<UserModel[]> = new BehaviorSubject(null);

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    private ref: ApplicationRef,
    private router: Router,
    private settingsService: SettingsService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
    this.afAuth.onAuthStateChanged(user => {
      this.user.next(null);
      if(user) {
        this.handleLogin(user);
      }
    });
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider);
  }

  /**
   * Handles login event
   */
  private async handleLogin(user: firebase.User) {
    const request: LoginRequestBody = { data: user };
    const response = await this.http.post<LoginResponseBody>(environment.backend + apis.login, request).toPromise();
    // Unauthorized user
    if(!response.data) {
      this.signOut();
    }
    // Authorized user
    else {
      const asd: MatSnackBarConfig = {}
      await this.settingsService.getSettings();
      this.user.next(response.data);
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 2000,
        data: {
          content: await this.translateService.get('snackbar_login').toPromise()
        }
      });
      this.ref.tick();
    }
  }

  /**
   * Sign out user
   */
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['']);
    this.ref.tick();
  }

  /**
   * Updates user data
   * @param user User data
   */
  async updateUser(user: UserModel) {
    const request: UpdateUserRequestBody = { data: user };
    const response = await this.http.post<UpdateUserResponseBody>(environment.backend + apis.updateUser, request).toPromise();
    await this.getUser(this.user.value.uid);
    return response;
  }

  /**
   * Updates user data
   * @param user User data
   */
  async getUser(uid: string) {
    const request: GetUserRequestBody = { data: { uid: uid } };
    const response = await this.http.post<GetUserResponseBody>(environment.backend + apis.getUser, request).toPromise();
    return this.user.next(response.data);
  }
  
  /**
   * Creates a new temporary user
   * @param email Email of the new temporary user
   * @param role Role of the new temporary user
   */
  async createTempUser(email: string, role: number) {
    const request: CreateTempUserRequestBody = { data: { email: email, role: role }};
    const response = await this.http.post<CreateTempUserResponseBody>(environment.backend + apis.createTempAdminUser, request).toPromise();
    await this.getAllUsers();
    return response;
  }

  async getAllUsers() {
    const request: GetAllUsersRequestBody = {};
    const response = await this.http.post<GetAllUsersResponseBody>(environment.backend + apis.getAllUsers, request).toPromise();
    this.users.next(response.data);
    this.ref.tick();
  }
}