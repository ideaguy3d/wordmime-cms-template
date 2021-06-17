import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { Media } from '../../../../models';
import { GetAllMediaRequestBody, SaveMediaDataRequestBody, UpdateMediaDataRequestBody } from '../../../../models/requests';
import { GetAllMediaResponseBody, SaveMediaDataResponseBody, UpdateMediaDataResponseBody } from '../../../../models/responses';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { apis } from '../../../../config/apis';

@Injectable()
export class MediaService {

    allMedia: BehaviorSubject<Media[]> = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
        private afStorage: AngularFireStorage
    ) {}

    async uploadMedia(data: Media) {
        const ref = this.afStorage.ref(data.ref);
        const task = ref.put(data.file, { customMetadata: { title: data.title, caption: data.caption } });
        const downloadURL = await new Promise<string>((resolve, reject) => {
            task.snapshotChanges().pipe(
                finalize(() => {
                    const downloadURL = ref.getDownloadURL();
                    downloadURL.subscribe(url => {
                        resolve(url);
                    });
                })
            ).subscribe();
        });
        delete data.file;
        data.downloadURL = data.ref;
        const request: SaveMediaDataRequestBody = { data: data };
        const response = await this.http.post<SaveMediaDataResponseBody>(environment.backend + apis.saveMediaData, request).toPromise();
        await this.getAllMedia();
        return response;
    }

    async updateMedia(data: Media) {
        delete data.file;
        const request: UpdateMediaDataRequestBody = { data: data };
        const response = await this.http.post<UpdateMediaDataResponseBody>(environment.backend + apis.updateMediaData, request).toPromise();
        await this.getAllMedia();
        return response;
    }

    async getAllMedia() {
        const request: GetAllMediaRequestBody = {};
        const response = await this.http.post<GetAllMediaResponseBody>(environment.backend + apis.getAllMedia, request).toPromise();
        this.allMedia.next(response.data);
    }
}