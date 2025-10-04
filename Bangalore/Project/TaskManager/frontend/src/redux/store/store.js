import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slice/authSlice';
import taskSlice from '../slice/taskSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tasks: taskSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});