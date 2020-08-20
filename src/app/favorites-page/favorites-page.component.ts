import { Component, OnInit } from '@angular/core';
import {ImageSearchService} from '../shared/services/image-search/image-search.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  constructor(private imgService: ImageSearchService) {

  }

  ngOnInit(): void {
  }

  public trackByFunc(idx, item: { id: number }) {
    return item.id;
  }

  public Download(item) {
    console.log(item);
    const blob = new Blob([item], { type: 'image/jpg' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}
