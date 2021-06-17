import { Component } from '@angular/core';
import { AdvertiserService } from 'src/app/services/advertiser.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss']
})
export class AdvertisersComponent {

  constructor(
    public advertiserService: AdvertiserService,
    public settingsService: SettingsService
  ) {
  }

  async ngOnInit() {
    if(!this.advertiserService.allAdvertisers.value) await this.advertiserService.getAdvertisers();
    if(!this.settingsService.meta.value) await this.settingsService.getSettings();
  }

  displayedColumns: string[] = ['advertiserName', 'title', 'link', 'docId', 'redirect', 'open'];
}
