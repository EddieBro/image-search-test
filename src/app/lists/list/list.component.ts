import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../../core/models/image.interafe';
import * as saveAs from 'file-saver';
import {ListState} from '../store/list.reducer';
import {select, Store} from '@ngrx/store';
import {selectLists} from '../store/list.selectors';
import {List} from '../../core/models/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Input() image: Image;
  @Output() modalClose = new EventEmitter();

  public show: number;
  public editToggle = true;
  public lists$ = this.store.pipe(select(selectLists));

  constructor(
    private store: Store<ListState>,
  ) { }

  ngOnInit(): void {
  }

  public toggle(idx) {
    this.editToggle = false;
    if (this.show === idx) {
      this.show = -1;
    } else {
      this.show = idx;
    }
  }

  public trackByFunc(idx, item: { id: number }) {
    return item.id;
  }

  public saveFile(image){
    saveAs(image.largeImageURL, image.tags);
  }
}
