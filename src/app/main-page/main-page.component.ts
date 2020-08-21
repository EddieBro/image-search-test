import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {ImageSearchService} from '../core/services/image-search/image-search.service';
import {MatDialog} from '@angular/material/dialog';
import {ListModalComponent} from '../core/modals/list-modal/list-modal.component';
import {Image} from '../core/models/image.interafe';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {
  public searchResult$: Image[];

  @ViewChild('imgSearch') input: ElementRef<HTMLElement>;

  constructor(
    private imgService: ImageSearchService,
    private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        filter(res => res.length > 3),
        debounceTime(250),
        distinctUntilChanged(),
        switchMap(text => this.imgService.getImages(text))
      ).subscribe(response => {
      this.searchResult$ = response.hits;
    });
  }

  public trackByFunc(idx, item: { id: number }) {
    return item.id;
  }

  public saveToList(image) {
    this.dialog.open(ListModalComponent, {
      width: '450px',
      data: image
    });
  }
}
