import { TagDialogComponent } from './../tagdialog/tagdialog.component';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ThingService } from 'ClientApp/app/core/services/thing.service';
import { Thing } from 'ClientApp/app/core/models/thing';
import { LoadingService } from 'ClientApp/app/core/services/loading.service';
import { ThingType } from 'ClientApp/app/core/models/thingtype';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {

  thingId: number;
  thing: Thing;
  types: Array<ThingType> = [];

  constructor(
    public thingService: ThingService,
    public toastr: ToastrService,
    private dialog: MatDialog,
    private loader: LoadingService
  ) { }

  ngOnInit(): void {
    this.getTypes();
    this.thingId = parseInt(localStorage.getItem('id'), 0);
    if (this.thingId !== 0) {
      this.fetch();
    } else {
      this.thing = new Thing();
      this.thing.id = 0;
    }
  }

  fetch() {
    this.thingService.getById(this.thingId).subscribe((res: Thing) => {
    this.thing = res;
    }, err => console.error(err));
  }

  getTypes() {
    this.thingService.getTypes().subscribe((res: Array<ThingType>) => {
      this.types = res;
    }, err => console.error(err));
  }

  save() {
    this.loader.showLoader();
    this.thingService.upsert(this.thing).subscribe((res: Thing) => {
      this.thing = res;
      this.loader.hideLoader();
    }, err => console.error(err));
  }

  removeTag(t) {
    this.toastr.warning('Not yet implemented', '');
  }

  newTagDialog() {
    let dialogRef = this.dialog.open(TagDialogComponent, {
      data: null,
      height: '250px',
      width: '400px',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.saved) {
        // do something with the tag
        if(result.tag != null) {
          if(this.thing.tags == null) {
            this.thing.tags = [];
          }
          this.thing.tags.push(result.tag);
        }
      }
    });
  }

}
