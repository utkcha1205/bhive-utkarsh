// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import workspacesReducer from '../features/worspace/workspaceSlice';

export const store = configureStore({
  reducer: {
    spaces: workspacesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
