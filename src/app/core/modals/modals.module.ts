import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModalComponent } from './list-modal/list-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ListsModule} from '../../lists/lists.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ListModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ListsModule,
    RouterModule
  ],
  exports: [
    ListModalComponent
  ],
  entryComponents: [
    ListModalComponent
  ],
})
export class ModalsModule { }
