import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { List } from '../../core/interfaces/list.interface';
import * as ListActions from './list.actions';

export const listsFeatureKey = 'lists';

export interface State {
  showSidenav: boolean;
}

export interface ListState extends EntityState<List> {
  // additional entities state properties
  error: any;
  selectedList: List;
}

export const adapter: EntityAdapter<List> = createEntityAdapter<List>();

export const initialState: EntityState<List> & { error: undefined } = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  images: []
});


export const reducer = createReducer(
  initialState,
  on(ListActions.addList,
    (state, action) =>
      adapter.addOne(action.list, state)
  ),
  on(ListActions.updateList, (state, action) =>
    adapter.updateOne(action.list, state)
  ),
  on(ListActions.updateListImage, (state, {id, images}) =>
    adapter.updateOne(
      {
        id,
        changes: {
          images,
        },
      }, state)
  )
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
