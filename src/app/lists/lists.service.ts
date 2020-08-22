import { Injectable } from '@angular/core';
import {List} from '../core/models/list.interface';
import {BehaviorSubject} from 'rxjs';
import {Image} from '../core/models/image.interafe';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  public listArray: BehaviorSubject<List[]> = new BehaviorSubject<List[]>([]);

  getLists() {
    return this.listArray;
  }

  addList(list: List) {
    return this.listArray.next([...this.listArray.value, list]);
  }

  addToListImage(id: string, image: Image) {
    const current = this.listArray.value.find(value => value.id === id);
    current.images.push(image);
    this.listArray.next([...this.listArray.value]);
  }

  editList(list: List){
    const current = this.listArray.value.find(value => value.id === list.id);
    current.title = list.title;
    current.description = list.description;
    current.images = list.images;
    this.listArray.next([...this.listArray.value]);
  }

  removeList(id: string) {
    const list = this.listArray.value.filter(value => value.id !== id);
    this.listArray.next(list);
  }
}
