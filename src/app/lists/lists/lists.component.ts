import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectLists} from '../store/list.selectors';
import {ListState} from '../store/list.reducer';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  public lists$ = this.store.pipe(select(selectLists));
  constructor(
    private store: Store<ListState>
  ) { }

  ngOnInit(): void {
  }

}
