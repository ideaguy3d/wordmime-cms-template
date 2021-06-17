import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Pipe({ name: 'media_pipe' })
export class MediaPipe implements PipeTransform {
    constructor(
        private settings: SettingsService
    ) {
        
    }
    async transform(downloadURL: string) {
        if(!this.settings.meta.value) await this.settings.getSettings();
        const meta = this.settings.meta.value;
        if(downloadURL.includes('firebasestorage')) return downloadURL;
        else {
            const url = downloadURL.charAt(0) == '/' ? downloadURL : ('/' + downloadURL);
            return "https://storage.googleapis.com/" + meta.siteConfigurations.storageName + url;
        }
    }
}