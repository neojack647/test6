import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
// import { TdDialogService } from '@covalent/core/dialogs';
import { LoadingService } from '../../core/services/loading.service';
import { ToastrService } from 'ngx-toastr';
import { DialogComponent } from './dialog/dialog.component';
import { Employee } from 'ClientApp/app/core/models/employee';
import { ADService } from 'ClientApp/app/core/services/ad.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ThingService } from 'ClientApp/app/core/services/thing.service';

@Component({
  selector: 'app-thing1',
  templateUrl: './thing1.component.html',
})
export class Thing1Component implements OnInit {
  loading = false;
  erroring = false;
  message = '';
  employee;
  selectedEmployeeName;
  filteredEmployees: Array<Employee> = [];
  employeeFormGroup: FormGroup;
  customErrorMessage = '';
  constructor(
    public dialog: MatDialog,
    // private dialogService: TdDialogService,
    private toastrService: ToastrService,
    private loader: LoadingService,
    private adService: ADService,
    private formBuilder: FormBuilder, 
    private thingService: ThingService
  ) { }

  ngOnInit() {
    this.employeeFormGroup = this.formBuilder.group({
      employeeCtrl: new FormControl('', [RequireMatch])
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { data: this.message },
      height: '400px',
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
      if (result.saved) {
        this.toastrService.info('Saved: ' + result.saved, 'Dialog response');
      } else {
        this.toastrService.warning('Not saved', 'Dialog response');
      }
    });
  }

  showLoader() {
    this.loader.showLoader();
    this.loading = true;
  }

  hideLoader() {
    this.loader.hideLoader();
    this.loader.resolveAllLoading();
    this.loading = false;
    this.toastrService.info('Loading has finished', 'A Title');
  }

  triggerError() {
    this.erroring = true;
    this.toastrService.error('Some meaningful message', 'This is an error!');
    this.loader.errorLoader();
  }

  resolveError() {
    this.loader.resolveAllError();
    this.toastrService.clear();
    this.erroring = false;
  }

  // Employee Autocomplete

  displayWith(obj?: any): string | undefined {
    return obj ? obj.fullName : undefined;
  }

  searchEmployees(name) {
    console.log('searching');
    if (name?.length > 2) {
      this.adService.getEmployeeByName(name).subscribe((res: Array<Employee>) => {
        this.filteredEmployees = res;
      }, err => console.error(err));
    }
  }

  selectedEmployee(e: Employee) {
    console.log('selectedEmployeeName', this.selectedEmployeeName);
    this.selectedEmployeeName = e.fullName;
  }

  clear() {
    this.selectedEmployeeName = null;
    this.filteredEmployees = [];
    this.employee = null;
  }

  
  raiseError() {
    this.thingService.sendCustomError(this.customErrorMessage).subscribe(res => {
      console.log('custom error response', res);
    }, err => console.error(err));
  }

}

function RequireMatch(control: AbstractControl) {
  const selection: any = control.value;
  if (typeof selection === 'string') {
      return { incorrect: true };
  }
  return null;
}
