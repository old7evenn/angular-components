import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TabState } from './tab.reducer';

export const selectTabState = createFeatureSelector<TabState>('tab');

export const selectSelectedTab = createSelector(
  selectTabState,
  (state: TabState) => state.selectedTab
);
