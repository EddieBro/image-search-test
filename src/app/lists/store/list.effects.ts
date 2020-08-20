import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromListActions from './list.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { ListsService } from '../lists.service';
import {of} from 'rxjs';

@Injectable()
export class ListEffects {



  constructor(
    private actions$: Actions,
    private listService: ListsService) {}

}
