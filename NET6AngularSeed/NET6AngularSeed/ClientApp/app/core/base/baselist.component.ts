import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2, Inject, } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { TdDialogService } from '@covalent/core/dialogs';
import { ToastrService } from 'ngx-toastr';
import { Pagination } from 'ClientApp/app/core/models/pagination';
import { LoadingService } from 'ClientApp/app/core/services/loading.service';
import { PagingParameters } from 'ClientApp/app/core/models/pagingparams';
import { BaseService } from '../services/base.service';

export abstract class BaseList {
  getPagination() {
  }

  onPaginateChange(e: any) {
  }

  orderByFilter(o: any) {
  }

  add() {
  }

  edit(i: any) {
  }

  delete(id: number) {
  }

  reload() {
    this.resetPaging();
    this.getPagination();
  }

  onSearch(val: string) {
  }

  resetPaging() {
  }
}

@Component({
  selector: 'app-base-comp',
  template: '',
})
export class BaseListComponent<T> implements BaseList, OnInit, AfterViewInit {
  totalPages: number;
  totalCount: number;
  searchValue = '';
  pagingResult: Pagination;
  pageSize = 10;
  pageNumber = 1;
  orderBy = '';
  direction = 'asc';
  pageEvent: PageEvent;
  pageSizeOptions = [5, 10, 15, 25, 50, 100];
  pageByObject = null;
  filteredCollection: Array<T> = [];
  collection: Array<T> = [];
  orderBySelected: Array<(string | boolean)> = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('searchBox', { read: ElementRef }) searchbox: ElementRef;
  loader: LoadingService;
  service: any;
  renderer: Renderer2;
  router: Router;
  toastr: ToastrService;
  dialogService: TdDialogService;
  dialog: MatDialog;

  constructor(
    router: Router,
    renderer: Renderer2,
    @Inject(BaseService) service: any,
    //service: any,
    loader: LoadingService,
    toastr: ToastrService,
    dialogService: TdDialogService,
    dialog: MatDialog) {
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

    this.service.getByPage(params).subscribe((res: Pagination) => {
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
    } else {
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
    }).afterClosed().subscribe((accept: boolean) => {
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

}
