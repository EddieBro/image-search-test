import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromList from './store/list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './store/list.effects';
import { ListAddComponent } from './list-add/list-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [ListAddComponent, ListComponent],
  exports: [
    ListAddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    StoreModule.forFeature(fromList.listsFeatureKey, fromList.reducer),
    EffectsModule.forFeature([ListEffects]),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListsModule { }
