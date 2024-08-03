import { createAction, props } from '@ngrx/store';

export const setSelectedTab = createAction(
  '[Tab] Set Selected Tab',
  props<{ tab: string }>()
);
