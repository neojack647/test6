import { ThingService } from './../../core/services/thing.service';
import { Component, OnInit, ViewChild, AfterViewInit, Injector, Type, InjectionToken, ElementRef, Renderer2 } from '@angular/core';
import { BaseListComponent } from 'ClientApp/app/core/base/baselist.component';
import { Thing } from '../../core/models/thing';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog} from '@angular/material/dialog';
import { TdDialogService } from '@covalent/core/dialogs';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
})
export class PagingComponent extends BaseListComponent<Thing> implements OnInit, AfterViewInit {

  constructor(
    router: Router,
    renderer: Renderer2,
    service: ThingService,
    loader: LoadingService,
    toastr: ToastrService,
    dialogService: TdDialogService,
    dialog: MatDialog
  ) {
    super(
      router,
      renderer,
      service,
      loader,
      toastr,
      dialogService,
      dialog);
    super.direction = 'desc';
  }

  add() {
    localStorage.clear();
    let t = new Thing();
    t.id = 0;
    this.edit(t);
  }

  edit(t: Thing): void {
    localStorage.clear();
    localStorage.setItem('id', JSON.stringify(t.id));
    this.router.navigate(['/paging/item']);
  }


}
