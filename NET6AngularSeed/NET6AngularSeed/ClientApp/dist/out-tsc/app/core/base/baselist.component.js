import { __decorate, __param } from "tslib";
import { Component, ViewChild, ElementRef, Inject, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PagingParameters } from 'ClientApp/app/core/models/pagingparams';
import { BaseService } from '../services/base.service';
export class BaseList {
    getPagination() {
    }
    onPaginateChange(e) {
    }
    orderByFilter(o) {
    }
    add() {
    }
    edit(i) {
    }
    delete(id) {
    }
    reload() {
        this.resetPaging();
        this.getPagination();
    }
    onSearch(val) {
    }
    resetPaging() {
    }
}
let BaseListComponent = class BaseListComponent {
    constructor(router, renderer, service, 
    //service: any,
    loader, toastr, dialogService, dialog) {
        this.searchValue = '';
        this.pageSize = 10;
        this.pageNumber = 1;
        this.orderBy = '';
        this.direction = 'asc';
        this.pageSizeOptions = [5, 10, 15, 25, 50, 100];
        this.pageByObject = null;
        this.filteredCollection = [];
        this.collection = [];
        this.orderBySelected = [];
        this.router = router;
        this.renderer = renderer;
        this.service = service;
        this.loader = loader;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let input = this.searchbox.nativeElement.querySelector('input');
        this.renderer.setAttribute(input, 'autocomplete', 'off'); // autocomplete is annoying
        this.getPagination();
    }
    getPagination() {
        this.loader.showLoader();
        let params = new PagingParameters();
        params.PageSize = this.pageSize;
        params.PageNumber = this.pageNumber;
        params.OrderBy = this.orderBy;
        params.Direction = this.direction;
        params.SearchValue = this.searchValue;
        params.PageByObject = this.pageByObject;
        this.service.getByPage(params).subscribe((res) => {
            this.collection = res.collection;
            this.filteredCollection = this.collection;
            this.totalCount = res.totalCount;
            this.totalPages = res.totalPages;
            this.loader.hideLoader();
        }, err => { console.error('Error', err); });
    }
    onPaginateChange(e) {
        this.pageSize = e.pageSize;
        this.pageNumber = e.pageIndex + 1;
        this.getPagination();
    }
    orderByFilter(o) {
        if (this.direction === 'asc') {
            this.direction = 'desc';
        }
        else {
            this.direction = 'asc';
        }
        this.orderBySelected = [];
        this.orderBySelected[o] = true;
        this.orderBySelected[this.direction] = true;
        this.orderBy = o;
        this.getPagination();
    }
    add() {
    }
    edit(t) {
    }
    delete(id) {
        this.dialogService.openConfirm({
            message: 'Are you sure you want to delete that?',
            disableClose: true,
            title: 'Confirm Delete',
            acceptButton: 'Yes',
            cancelButton: 'No'
        }).afterClosed().subscribe((accept) => {
            if (accept) {
                this.service.delete(id).subscribe(res => {
                    this.reload();
                }, err => { console.error(err); });
            }
        });
    }
    reload() {
        this.resetPaging();
        this.getPagination();
    }
    onSearch(val) {
        this.searchValue = val;
        this.resetPaging();
        this.getPagination();
    }
    resetPaging() {
        this.orderBySelected = [];
        this.pageNumber = 1;
        this.paginator.pageIndex = 0; // move to the first page to show latest results
    }
};
__decorate([
    ViewChild(MatPaginator)
], BaseListComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild('searchBox', { read: ElementRef })
], BaseListComponent.prototype, "searchbox", void 0);
BaseListComponent = __decorate([
    Component({
        selector: 'app-base-comp',
        template: '',
    }),
    __param(2, Inject(BaseService))
], BaseListComponent);
export { BaseListComponent };
//# sourceMappingURL=baselist.component.js.map