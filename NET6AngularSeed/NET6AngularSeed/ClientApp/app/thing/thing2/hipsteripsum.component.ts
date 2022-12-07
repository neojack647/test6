import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from './../../core/services/loading.service';
import { ThingService } from './../../core/services/thing.service';

@Component({
  selector: 'app-hipster-ipsum',
  templateUrl: './hipsteripsum.component.html',
})
export class HipsterIpsumComponent implements OnInit {
  ipsums: Array<string> = [];
  constructor(
    public service: ThingService,
    private loader: LoadingService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
  }

  fetchHipster() {
    this.loader.showLoader();
    this.service.getHipster().subscribe((res: any) => {
      console.log('res is ', res);
      res.forEach(e => {
        this.ipsums.push(e);
      });
      this.loader.hideLoader();
    }, err => { console.error('error!', err); this.loader.errorLoader(); });
  }
}

