import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModalComponent } from './list-modal/list-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ListModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ListModalComponent
  ],
  entryComponents: [
    ListModalComponent
  ],
})
export class ModalsModule { }
