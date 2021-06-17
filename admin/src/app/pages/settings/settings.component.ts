import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteConfiguration } from '../../../../../models';
import { SettingsService } from '../../services/settings.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ){
    this.initializeForm();
  }

  async initializeForm() {

    if(!this.settingsService.meta.value) await this.settingsService.getSettings();
    const siteConfigurations = this.settingsService.meta.value.siteConfigurations;

    this.form = this.fb.group({
      siteName: new FormControl(siteConfigurations?.siteName || '', [
        Validators.required
      ]),
      siteTitle: new FormControl(siteConfigurations?.siteTitle || '', [
        Validators.required
      ]),
      siteDescription: new FormControl(siteConfigurations?.siteDescription || '', [
        Validators.required
      ]),
      domainName: new FormControl(siteConfigurations?.domainName || '', [
        Validators.required
      ]),
      storageName: new FormControl(siteConfigurations?.storageName || '', [
        Validators.required
      ]),
      startYear: new FormControl(siteConfigurations?.startYear || '', [
        Validators.required
      ]),
      language: new FormControl(siteConfigurations?.language || 'en', [
        Validators.required
      ]),
      gtagId: new FormControl(siteConfigurations?.gtagId || '', [
        
      ]),
      defaultExternalUrl: new FormControl(siteConfigurations?.defaultExternalUrl || '', [
        
      ]),
      defaultExternalTitle: new FormControl(siteConfigurations?.defaultExternalTitle || '', [
        
      ]),
      adsenseId: new FormControl(siteConfigurations?.adsenseId || '', [
        
      ]),
      emailUrl: new FormControl(siteConfigurations?.emailUrl || '', [
        
      ]),
      adminEmail: new FormControl(siteConfigurations?.adminEmail || '', [
        
      ]),
      adminEmailPassword: new FormControl(siteConfigurations?.adminEmailPassword || '', [
        
      ]),
      twitterUrl: new FormControl(siteConfigurations?.twitterUrl || '', [
        
      ]),
      facebookUrl: new FormControl(siteConfigurations?.facebookUrl || '', [
        
      ]),
      instagramUrl: new FormControl(siteConfigurations?.instagramUrl || '', [
        
      ]),
      pinterestUrl: new FormControl(siteConfigurations?.pinterestUrl || '', [
        
      ]),
      youtubeUrl: new FormControl(siteConfigurations?.youtubeUrl || '', [
        
      ])
    });
  }

  async submit() {
    const value: SiteConfiguration = this.form.value;
    const update = await this.settingsService.updateSettings(value);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      data: {
        content: await this.translateService.get('snackbar_setting_update').toPromise()
      }
    });
  }
}
