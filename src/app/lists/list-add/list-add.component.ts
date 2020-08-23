import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {generateId} from '../../core/utils/generate-id';
import {Store} from '@ngrx/store';
import {addList} from '../store/list.actions';


@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.scss']
})
export class ListAddComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store) {
  }

  addListForm = this.fb.group({
    title: [''],
    description: [''],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const list = {
      id: generateId(),
      title: this.addListForm.controls.title.value,
      description: this.addListForm.controls.description.value,
      images: []
    };
    this.store.dispatch(addList({ list }));
  }
}
