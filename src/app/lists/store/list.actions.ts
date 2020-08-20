import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { List } from '../../core/models/list.interface';

// addProduct

export const addList = createAction(
  '[List Add] Add List',
  props<{ list: List }>()
);

export const addListSuccess = createAction(
  '[Product Add Effect] Add List Success',
  props<{ list: List }>()
);

export const addListFailure = createAction(
  '[Product Add Effect] Add List Failure',
  props<{ error: any }>()
);

// export const editList = createAction(
//   '[List Add] Add List',
//   props<{ list: List }>()
// );
//
// export const addListSuccess = createAction(
//   '[Product Add Effect] Add List Success',
//   props<{ list: List }>()
// );
//
// export const addListFailure = createAction(
//   '[Product Add Effect] Add List Failure',
//   props<{ error: any }>()
// );
