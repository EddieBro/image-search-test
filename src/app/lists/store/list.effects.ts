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

  loadLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListActions.loadLists),
      mergeMap(action =>
        this.listService.getLists().pipe(
          map(lists => fromListActions.loadListsSuccess({lists})),
          catchError(error =>
            of(fromListActions.loadListsFailure({error})))
        )
      )
    )
  );

  // createList$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromListActions.addList),
  //     mergeMap(action =>
  //       this.listService.addList(action.list).pipe(
  //         map(product => fromListActions.addListSuccess({ list })),
  //         catchError(error =>
  //           of(fromListActions.addListFailure({ error }))
  //         )
  //       )
  //     )
  //   )
  // );
}
