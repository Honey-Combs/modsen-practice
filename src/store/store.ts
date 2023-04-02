import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from '@store/slices/weatherSlice';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { weather: weatherSlice.reducer },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
