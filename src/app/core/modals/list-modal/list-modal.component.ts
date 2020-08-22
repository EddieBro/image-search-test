import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListsService} from '../../../lists/lists.service';
import {select, Store} from '@ngrx/store';
import {updateListImage} from '../../../lists/store/list.actions';
import {Update} from '@ngrx/entity';
import {List} from '../../models/list.interface';
import {selectLists} from '../../../lists/store/list.selectors';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  public createToggle = false;
  // public lists$ = this.listsService.getLists().asObservable();
  public lists$ = this.store.pipe(select(selectLists));
  constructor(
    private dialogRef: MatDialogRef<ListModalComponent>,
    // private listsService: ListsService,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  addToListImage(id, image) {
    // this.listsService.addToListImage(id, image);
    const list = {
      images: [image]
    };
    const update: Update<List> = {
      id,
      changes: list
    };
    this.store.dispatch(updateListImage({list: update}));
    this.dialogRef.close();
  }
}
