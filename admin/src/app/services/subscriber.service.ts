import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { apis } from '../../../../config/apis';
import { BehaviorSubject } from 'rxjs';
import { Subscriber } from '../../../../models';
import { GetSubscribersRequestBody } from '../../../../models/requests';
import { GetSubscribersResponseBody } from '../../../../models/responses';

@Injectable()
export class SubscriberService {
    subscribers: BehaviorSubject<Subscriber[]> = new BehaviorSubject(null);
    constructor(
        private http: HttpClient
    ) {}
    async getSubscribers() {
        const request: GetSubscribersRequestBody = {};
        const response = await this.http.post<GetSubscribersResponseBody>(environment.backend + apis.getSubscribers, request).toPromise();
        this.subscribers.next(response.data);
        return response;
    }
}
