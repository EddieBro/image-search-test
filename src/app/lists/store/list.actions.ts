import { createAction, props } from '@ngrx/store';

import { List } from '../../core/models/list.interface';
import {Update} from '@ngrx/entity';

export const loadLists = createAction(
  '[Lists List Component] Load Lists'
);
export const loadListsSuccess = createAction(
  '[Lists List Effect] Load Lists Success',
  props<{ lists: List[] }>()
);
export const loadListsFailure = createAction(
  '[Product List Effect] Load Lists Failure',
  props<{ error: any }>()
);

export const addList = createAction(
  '[List Add] Add List',
  props<{ list: List }>()
);

export const addListSuccess = createAction(
  '[ListState Add Effect] Add List Success',
  props<{ list: List }>()
);

export const addListFailure = createAction(
  '[ListState Add Effect] Add List Failure',
  props<{ error: any }>()
);

export const updateList = createAction(
  '[List Edit Component] Update List',
  props<{ list: Update<List> }>()
);

export const updateListImage = createAction(
  '[List Edit Image] Update List Images',
  props<{ list: Update<List> }>()
);
