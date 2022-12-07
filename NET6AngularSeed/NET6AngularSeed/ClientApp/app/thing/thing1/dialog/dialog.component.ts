import { Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  message = '';
  constructor(
    private loader: LoadingService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.message = this.data;
  }

  close(): void {
    // close without saving
    this.dialogRef.close({ saved: false });
  }

  save() {
    // save and close
    this.dialogRef.close({ saved: true });
  }


}
