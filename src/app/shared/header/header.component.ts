import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('search') input: ElementRef;
  public toggleMenu = false;
  constructor() {
  }

  ngOnInit(): void {
  }
}
