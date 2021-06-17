import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { apis } from '../../../../config/apis';
import { BehaviorSubject } from 'rxjs';
import { Advertiser } from '../../../../models';
import { CreateAdvertiserRequestBody, GetAllAdvertisersRequestBody, UpdateAdvertiserRequestBody } from '../../../../models/requests';
import { CreateAdvertiserResponseBody, GetAllAdvertisersResponseBody, UpdateAdvertiserResponseBody } from '../../../../models/responses';

@Injectable()
export class AdvertiserService {
    allAdvertisers: BehaviorSubject<Advertiser[]> = new BehaviorSubject(null);
    constructor(
        private http: HttpClient
    ) {}
    async getAdvertisers() {
        const request: GetAllAdvertisersRequestBody = {};
        const response = await this.http.post<GetAllAdvertisersResponseBody>(environment.backend + apis.getAllAdvertisers, request).toPromise();
        this.allAdvertisers.next(response.data);
        return response;
    }
    async createAdvertiser(advertiser: Advertiser) {
        const request: CreateAdvertiserRequestBody = { data: advertiser };
        const response = await this.http.post<CreateAdvertiserResponseBody>(environment.backend + apis.createAdvertiser, request).toPromise();
        await this.getAdvertisers();
        return response;
    }
    async updateAdvertiser(data: Advertiser) {
        const request: UpdateAdvertiserRequestBody = { data: data };
        const response = await this.http.post<UpdateAdvertiserResponseBody>(environment.backend + apis.updateAdvertiser, request).toPromise();
        await this.getAdvertisers();
        return response;
    }
}
