import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { dailyWeatherForecastSlice } from '@/store/slices/dailyWeatherForecastSlice';
import rootSaga from '@/store/sagas/rootSaga';
import { geocodingSlice } from '@/store/slices/geocodingSlice';
import geolocationSlice from '@/store/slices/geolocationSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    dailyWeather: dailyWeatherForecastSlice.reducer,
    geocoding: geocodingSlice.reducer,
    geolocation: geolocationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
