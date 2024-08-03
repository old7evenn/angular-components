import { TabState } from "./auth/store/tab.reducer";

export interface AppState {
  user: UserState;
  tab: TabState;
}

export interface UserState {
  id: string | null;
  name: string | null;
}
