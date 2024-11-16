import { configureStore } from '@reduxjs/toolkit';
import bugReducer from './../features/bugSlice'

// Configure the store
export const store = configureStore({
  reducer: {
    bugs: bugReducer,
  },
});

// Export RootState and AppDispatch for typing in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


