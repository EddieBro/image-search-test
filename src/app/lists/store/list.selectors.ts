import {createFeatureSelector, createSelector} from '@ngrx/store';
import {listsFeatureKey, ListState, selectAll} from './list.reducer';

export const selectListState = createFeatureSelector<ListState>(
  listsFeatureKey
);

export const selectLists = createSelector(selectListState, selectAll);
export const selectedList = createSelector(
  selectListState,
  (state: ListState) => state.selectedList
);
