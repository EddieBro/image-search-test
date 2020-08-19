import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import { ImageCardComponent } from './image-card/image-card.component';



@NgModule({
  declarations: [HeaderComponent, ImageCardComponent],
  exports: [
    HeaderComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
