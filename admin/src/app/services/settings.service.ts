import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { Meta, SiteConfiguration } from '../../../../models';
import { GetMetaRequestBody, UpdateSiteConfigurationsRequestBody } from '../../../../models/requests';
import { GetMetaResponseBody, UpdateSiteConfigurationsResponseBody } from '../../../../models/responses';
import { apis } from '../../../../config/apis';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SettingsService {

    meta: BehaviorSubject<Meta> = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
        private ref: ApplicationRef,
        private translateService: TranslateService
    ) {}

    async getSettings() {
        const request: GetMetaRequestBody = {};
        const response = await this.http.post<GetMetaResponseBody>(environment.backend + apis.getMeta, request).toPromise();
        this.meta.next(response.data);
        await this.translateService.use(response.data.siteConfigurations?.language || 'en').toPromise();
        this.ref.tick();
        return response;
    }

    async updateSettings(settings: SiteConfiguration) {
        const request: UpdateSiteConfigurationsRequestBody = { data: settings };
        const response = await this.http.post<UpdateSiteConfigurationsResponseBody>(environment.backend + apis.updateSiteConfigurations, request).toPromise();
        await this.getSettings();
        return response;
    }
}