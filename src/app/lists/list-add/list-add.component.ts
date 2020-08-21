import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ListsService} from '../lists.service';
import {generateId} from '../../core/utils/idgen';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.scss']
})
export class ListAddComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private listsService: ListsService) {
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
    this.listsService.addList(list);
  }
}
