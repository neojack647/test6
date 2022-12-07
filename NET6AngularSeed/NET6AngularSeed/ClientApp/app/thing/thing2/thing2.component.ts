import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from './../../core/services/loading.service';
import { ThingService } from './../../core/services/thing.service';

@Component({
  selector: 'app-thing2',
  templateUrl: './thing2.component.html',
})
export class Thing2Component implements OnInit, OnDestroy {
  bacons: Array<string> = [];
  pollingSubscription: Subscription;
  constructor(
    public service: ThingService,
    private loader: LoadingService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  fetchBacon() {
    this.loader.showLoader();
    this.service.getBacon().subscribe((res: any) => {
      console.log('res is ', res);
      res.forEach(e => {
        this.bacons.push(e);
      });
      this.loader.hideLoader();
    }, err => { console.error('error!', err); this.loader.errorLoader(); });
  }
}

