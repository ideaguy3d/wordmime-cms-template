import { Pipe, NgZone, ChangeDetectorRef, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Pipe({ name: 'time_pipe' })
export class TimePipe implements PipeTransform {
    private timer;
    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private ngZone: NgZone,
        private translateService: TranslateService
    ) { }
    async transform(value) {
        this.removeTimer();
        let /** @type {?} */ d = new Date(value._seconds * 1000);
        let /** @type {?} */ now = new Date();
        let /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        let /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        let /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        let /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        let /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        let /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return await this.translateService.get('time_pipe_1').pipe(take(1)).toPromise();
        }
        else if (seconds <= 90) {
            return await this.translateService.get('time_pipe_2').pipe(take(1)).toPromise();
        }
        else if (minutes <= 45) {
            return minutes + await this.translateService.get('time_pipe_3').pipe(take(1)).toPromise();
        }
        else if (minutes <= 90) {
            return await this.translateService.get('time_pipe_4').pipe(take(1)).toPromise();
        }
        else if (hours <= 22) {
            return hours + await this.translateService.get('time_pipe_5').pipe(take(1)).toPromise();
        }
        else if (hours <= 36) {
            return await this.translateService.get('time_pipe_6').pipe(take(1)).toPromise();
        }
        else if (days <= 25) {
            return days + await this.translateService.get('time_pipe_7').pipe(take(1)).toPromise();
        }
        else if (days <= 45) {
            return await this.translateService.get('time_pipe_8').pipe(take(1)).toPromise();
        }
        else if (days <= 345) {
            return months + await this.translateService.get('time_pipe_9').pipe(take(1)).toPromise();
        }
        else if (days <= 545) {
            return await this.translateService.get('time_pipe_10').pipe(take(1)).toPromise();
        }
        else {
            // (days > 545)
            return years + await this.translateService.get('time_pipe_11').pipe(take(1)).toPromise();
        }
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    getSecondsUntilUpdate(seconds) {
        let /** @type {?} */ min = 60;
        let /** @type {?} */ hr = min * 60;
        let /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    }
}
