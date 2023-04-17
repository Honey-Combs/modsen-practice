import { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchDailyForecastRequested,
  fetchDailyForecastFailed,
  fetchDailyForecastSuccess,
} from '@store/slices/dailyWeatherForecastSlice';
import { CallEffect, PutEffect, call, put, takeEvery } from 'redux-saga/effects';
import { weatherForecastApi } from '@/api/weatherForecastApi/weatherForecastApi';
import { GPSCoordinates } from '@/typings/GPSCoordinates';
import { IOpenMeteoDailyForecast } from '@/interfaces/IWeatherForecastApiResponses';

export function* fetchDailyForecast(
  action: PayloadAction<GPSCoordinates>
): Generator<CallEffect | PutEffect, void, IOpenMeteoDailyForecast> {
  try {
    const openMeteoDailyForecast: IOpenMeteoDailyForecast = yield call(
      weatherForecastApi.getDailyForecast,
      action.payload
    );

    yield put(fetchDailyForecastSuccess(openMeteoDailyForecast));
  } catch (error) {
    yield put(fetchDailyForecastFailed);
  }
}

export function* dailyWeatherForecastSaga() {
  yield takeEvery(fetchDailyForecastRequested.type, fetchDailyForecast);
}
