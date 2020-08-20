import {Component, Input, OnInit} from '@angular/core';
import {ImageObj, ImageSearchService} from '../services/image-search/image-search.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image: ImageObj;
  constructor(private imgService: ImageSearchService) { }

  ngOnInit(): void {
  }
}
