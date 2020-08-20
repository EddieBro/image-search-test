import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { List } from '../../core/models/list.interface';
import * as ListActions from './list.actions';

export const listsFeatureKey = 'lists';

export interface ProductState extends EntityState<List> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<List> = createEntityAdapter<List>();

export const initialState: ProductState = adapter.getInitialState({
  // additional entity state properties
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(ListActions.addListSuccess,
    (state, action) => adapter.addOne(action.list, state)
  ),
  on(ListActions.addListFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  )
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
