import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { apis } from '../../../../config/apis';
import { BehaviorSubject } from 'rxjs';
import { Sponsor } from '../../../../models';
import { CreateSponsorRequestBody, GetAllSponsorsRequestBody } from '../../../../models/requests';
import { CreateSponsorResponseBody, GetAllSponsorsResponseBody } from '../../../../models/responses';

@Injectable()
export class SponsorService {
    allSponsors: BehaviorSubject<Sponsor[]> = new BehaviorSubject(null);
    constructor(
        private http: HttpClient
    ) {}
    async getSponsors() {
        const request: GetAllSponsorsRequestBody = {};
        const response = await this.http.post<GetAllSponsorsResponseBody>(environment.backend + apis.getAllSponsors, request).toPromise();
        this.allSponsors.next(response.data);
        return response;
    }
    async createSponsor(sponsor: Sponsor) {
        const request: CreateSponsorRequestBody = { data: sponsor };
        const response = await this.http.post<CreateSponsorResponseBody>(environment.backend + apis.createSponsor, request).toPromise();
        await this.getSponsors();
        return response;
    }
}
