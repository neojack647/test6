import { __decorate } from "tslib";
import { TagDialogComponent } from './../tagdialog/tagdialog.component';
import { Component } from '@angular/core';
import { Thing } from './../../../core/models/thing';
let ItemComponent = class ItemComponent {
    constructor(thingService, toastr, dialog) {
        this.thingService = thingService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.types = [];
    }
    ngOnInit() {
        this.getTypes();
        this.thingId = parseInt(localStorage.getItem('id'), 0);
        if (this.thingId !== 0) {
            this.fetch();
        }
        else {
            this.thing = new Thing();
            this.thing.id = 0;
        }
    }
    fetch() {
        this.thingService.getById(this.thingId).subscribe((res) => {
            this.thing = res;
        }, err => console.error(err));
    }
    getTypes() {
        this.thingService.getTypes().subscribe((res) => {
            this.types = res;
        }, err => console.error(err));
    }
    save() {
        this.thingService.upsert(this.thing).subscribe((res) => {
            this.thing = res;
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
                if (result.tag != null) {
                    if (this.thing.tags == null) {
                        this.thing.tags = [];
                    }
                    this.thing.tags.push(result.tag);
                }
            }
        });
    }
};
ItemComponent = __decorate([
    Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
    })
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map