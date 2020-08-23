import { createAction, props } from '@ngrx/store';

import { List } from '../../core/interfaces/list.interface';
import {Update} from '@ngrx/entity';
import {Image} from '../../core/interfaces/image.interafe';

export const loadLists = createAction(
  '[List Component] Load Lists'
);

export const loadList = createAction(
  '[Load List] Load List',
  props<{ id: string }>()
);

export const addList = createAction(
  '[List Add] Add List',
  props<{ list: List }>()
);

export const updateList = createAction(
  '[List Edit] Update List',
  props<{ list: Update<List> }>()
);

export const updateListImage = createAction(
  '[List Edit Image] Update List Images',
  props<{ id: number, images: Image[] }>()
);

