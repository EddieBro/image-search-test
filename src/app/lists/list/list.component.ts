import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListsService} from '../lists.service';
import {Image} from '../../core/models/image.interafe';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() image: Image;
  @Output() modalClose = new EventEmitter();
  public editToggle = false;
  public lists$ = this.listsService.getLists().asObservable();
  constructor(
    private listsService: ListsService,
  ) { }

  ngOnInit(): void {
  }

  public trackByFunc(idx, item: { id: number }) {
    return item.id;
  }

  public saveFile(image){
    saveAs(image.largeImageURL, image.tags);
  }
}
