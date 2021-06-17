import { Component, Inject, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdvertiserService } from '../../services/advertiser.service';
import { Article } from '../../../../../models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'advertiser-link-build',
    templateUrl: 'advertiser-link-build-dialog.component.html',
    styleUrls: ['advertiser-link-build-dialog.component.scss']
})
export class AdvertiserLinkBuildDialogComponent implements OnInit, OnDestroy {

    isInternal = "false";
    form: FormGroup;
    formSubscription: Subscription;
    linkCode = new BehaviorSubject('');
    constructor(
        public advertiserService: AdvertiserService,
        public dialogRef: MatDialogRef<AdvertiserLinkBuildDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Article,
        private fb: FormBuilder
    ) {}

    async ngOnInit() {
        if(!this.advertiserService.allAdvertisers.value) await this.advertiserService.getAdvertisers();
        this.form = this.fb.group({
            title: new FormControl(''),
            text: new FormControl(''),
            link: new FormControl('')
        });
        this.formSubscription = this.form.valueChanges.subscribe(change => {
            this.linkCode.next(this.buildLink(this.form.get('link').value, this.form.get('title').value, this.data.title, this.form.get('text').value));
        })
    }

    ngOnDestroy() {
        this.formSubscription.unsubscribe();
    }

    buildLink(link, title, article, text) {
        return `<a href="${link}" target="_blank" class="link" ${ this.isInternal == 'false' ? 'rel="nofollow"' : 'rel="noopener"'} title="${title}" article="${article}">${text}</a>`
    }

    changeInternal(val) {
        this.isInternal = val;
    }
}