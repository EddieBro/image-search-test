import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {updateListImage} from '../../../lists/store/list.actions';
import {selectLists} from '../../../lists/store/list.selectors';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  public createToggle = false;
  public lists$ = this.store.pipe(select(selectLists));
  constructor(
    private dialogRef: MatDialogRef<ListModalComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  addToListImage(list, image) {
    const images = [...list.images, image];
    this.store.dispatch(updateListImage({id: list.id, images}));
    this.dialogRef.close();
  }
}
