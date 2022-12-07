import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tag } from 'ClientApp/app/core/models/tag';
let TagDialogComponent = class TagDialogComponent {
    constructor(loader, toastr, tagService, dialogRef) {
        this.loader = loader;
        this.toastr = toastr;
        this.tagService = tagService;
        this.dialogRef = dialogRef;
        this.value = '';
        this.tagControl = new FormControl();
        this.tags = [];
        this.searchResultEmpty = false;
    }
    ngOnInit() {
        this.tag = new Tag();
        this.tag.id = 0;
        this.tag.description = '';
    }
    close() {
        // close without saving
        this.dialogRef.close({ saved: false });
    }
    displayWith(obj) {
        return obj ? obj.description : undefined;
    }
    selectedTag(t) {
        this.selectedTagValue = null;
        this.selectedTagValue = t.description;
        this.tag = t;
    }
    search(e) {
        var _a;
        this.searchResultEmpty = false;
        // let text = e.target.value;
        if (((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) >= 2) {
            this.tagService.search(this.value).subscribe((res) => {
                this.tags = res;
                if (this.tags.length == 0) {
                    this.searchResultEmpty = true;
                }
            }, err => console.error(err));
        }
    }
    // get existing tags or create a new tag
    save() {
        if (this.value.length > 0 || this.tag) {
            // save and close
            this.loader.showLoader();
            if (this.tag.id == 0) {
                this.tag.description = this.value;
                this.tagService.upsert(this.tag).subscribe((res) => {
                    this.tag = res;
                    this.loader.resolveAllLoading();
                    this.dialogRef.close({ 'saved': true, 'tag': this.tag });
                }, err => console.error(err));
            }
            else {
                this.loader.resolveAllLoading();
                this.dialogRef.close({ 'saved': true, 'tag': this.tag });
            }
        }
    }
};
TagDialogComponent = __decorate([
    Component({
        selector: 'app-tagdialog',
        templateUrl: './tagdialog.component.html',
    })
], TagDialogComponent);
export { TagDialogComponent };
//# sourceMappingURL=tagdialog.component.js.map