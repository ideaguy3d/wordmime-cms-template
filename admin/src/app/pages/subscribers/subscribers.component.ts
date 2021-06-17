import { Component } from '@angular/core';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent {

  constructor(
    public subscriberService: SubscriberService
  ) {
    if(!this.subscriberService.subscribers.value) this.subscriberService.getSubscribers();
  }

  displayedColumns: string[] = ['email'];

}
