import { Component } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {

  constructor(
    public mediaService: MediaService,
    public settingsService: SettingsService
  ) {
  }

  async ngOnInit() {
    if(!this.mediaService.allMedia.value) await this.mediaService.getAllMedia();
    if(!this.settingsService.meta.value) await this.settingsService.getSettings();
  }

  displayedColumns: string[] = ['image' ,'title', 'caption', 'downloadURL', 'ref', 'type', 'open'];
}
