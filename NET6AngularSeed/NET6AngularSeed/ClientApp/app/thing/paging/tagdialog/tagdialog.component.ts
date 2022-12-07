import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'ClientApp/app/core/services/loading.service';
import { Tag } from 'ClientApp/app/core/models/tag';
import { TagService } from 'ClientApp/app/core/services/tag.service';

@Component({
  selector: 'app-tagdialog',
  templateUrl: './tagdialog.component.html',
})
export class TagDialogComponent implements OnInit {
  value: string = '';
  selectedTagValue;
  tag: Tag;
  tagControl = new FormControl();
  tags: Array<Tag> = [];
  searchResultEmpty = false;
  constructor(
    private loader: LoadingService,
    private toastr: ToastrService,
    private tagService: TagService,
    private dialogRef: MatDialogRef<TagDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.tag = new Tag();
    this.tag.id = 0;
    this.tag.description = '';
  }

  close(): void {
    // close without saving
    this.dialogRef.close({ saved: false });
  }

  displayWith(obj?: any): string | undefined {
    return obj ? obj.description : undefined;
  }

  selectedTag(t: Tag) {
    this.selectedTagValue = null;
    this.selectedTagValue = t.description;
    this.tag = t;
  }

  search(e) {
    this.searchResultEmpty = false;
    // let text = e.target.value;
    if(this.value?.length >= 2) {
      this.tagService.search(this.value).subscribe((res: Array<Tag>) => {
        this.tags = res;
        if(this.tags.length == 0){
          this.searchResultEmpty = true;
        }
      }, err => console.error(err));
    }
  }

  // get existing tags or create a new tag
  save() {
    if(this.value.length > 0 || this.tag) {
      // save and close
      this.loader.showLoader();
      if(this.tag.id == 0) {
        this.tag.description = this.value;
        this.tagService.upsert(this.tag).subscribe((res: Tag) => {
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

}
