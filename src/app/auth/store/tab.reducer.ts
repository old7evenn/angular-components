import { Action, createReducer, on } from '@ngrx/store';
import { setSelectedTab } from './tab.actions';

export interface TabState {
  selectedTab: string;
}

export const initialState: TabState = {
  selectedTab: 'login',
};

const _tabReducer = createReducer(
  initialState,
  on(setSelectedTab, (state, { tab }) => ({ ...state, selectedTab: tab }))
);

export function tabReducer(state: TabState | undefined, action: Action) {
  return _tabReducer(state, action);
}
