import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MediaService } from 'src/app/services/media.service';
import { Media } from '../../../../../models';

@Component({
    selector: 'media-select-dialog',
    templateUrl: 'media-select-dialog.component.html',
    styleUrls: ['media-select-dialog.component.scss']
})
export class MediaSelectDialogComponent {
    constructor(
        public mediaService: MediaService,
        public dialogRef: MatDialogRef<MediaSelectDialogComponent>
    ) {
        if(!this.mediaService.allMedia.value) this.mediaService.getAllMedia();
    }

    select(media: Media) {
        return this.dialogRef.close(media);
    }
}