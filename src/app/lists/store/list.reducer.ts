import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { List } from '../../core/models/list.interface';
import * as ListActions from './list.actions';
import {log} from 'util';

export const listsFeatureKey = 'lists';

export interface ListState extends EntityState<List> {
  // additional entities state properties
  error: any;
  selectedList: List;
}

export const adapter: EntityAdapter<List> = createEntityAdapter<List>();

export const initialState: EntityState<List> & { error: undefined } = adapter.getInitialState({
  // additional entity state properties
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(ListActions.addList,
    (state, action) =>
      adapter.addOne(action.list, state)
  ),
  on(ListActions.addListFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
  }),
  on(ListActions.loadListsSuccess, (state, action) =>
    adapter.setAll(action.lists, state)
  ),
  on(ListActions.loadListsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ListActions.updateList, (state, action) =>
    adapter.updateOne(action.list, state)
  ),
  on(ListActions.updateListImage, (state, action) => ({
    ...state,
    images: [].push(action)
  })),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
