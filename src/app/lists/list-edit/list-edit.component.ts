import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {List} from '../../core/interfaces/list.interface';
import {select, Store} from '@ngrx/store';
import {updateList} from '../store/list.actions';
import {Update} from '@ngrx/entity';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
  @Input() list: List;
  @Output() editComplete: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  editListForm = this.fb.group({
    title: [''],
    description: ['']
  });

  ngOnInit(): void {
    this.editListForm.patchValue({
      id: this.list.id,
      title: this.list.title,
      description: this.list.description,
      images: this.list.images
    });
  }

  onSubmit() {
    const list = {
      id: this.list.id,
      title: this.editListForm.controls.title.value,
      description: this.editListForm.controls.description.value,
      images: this.list.images
    };
    const update: Update<List> = {
      id: this.list.id,
      changes: list
    };
    this.editComplete.emit(true);
    this.store.dispatch(updateList({list: update}));
  }
}
