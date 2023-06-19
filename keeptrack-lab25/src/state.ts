import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import { ProjectState } from './projects/state/projectTypes';
import { initialProjectState } from './projects/state/projectReducer';
import { projectReducer } from './projects/state/projectReducer';

const reducer = combineReducers({
  projectState: projectReducer
});

export default function createAppStore(preloadedState: any) {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxThunk),
    preloadedState
  });
  return store;
}

export interface AppState {
  projectState: ProjectState;
}

export const initialAppState: AppState = {
  projectState: initialProjectState
};

export const store = createAppStore(initialAppState);
