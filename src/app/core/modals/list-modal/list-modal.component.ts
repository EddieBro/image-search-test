import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListsService} from '../../../lists/lists.service';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  public createToggle: boolean;
  public lists$ = this.listsService.getLists().asObservable();
  constructor(
    private dialogRef: MatDialogRef<ListModalComponent>,
    private listsService: ListsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createToggle = false;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
