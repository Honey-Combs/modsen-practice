import { OpenMeteoApi } from '@api/openMeteoApi/openMeteoApi';
import { IOpenMeteoDailyForecast } from '@api/openMeteoApi/responseModels';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchDailyForecastRequested,
  fetchDailyForecastFailed,
  fetchDailyForecastSuccess,
} from '@store/slices/dailyWeatherForecastSlice';
import { CallEffect, PutEffect, call, put, takeEvery } from 'redux-saga/effects';
import { GPSCoordinates } from '@/typings/types/GPSCoordinates';

export function* fetchDailyForecast(
  action: PayloadAction<GPSCoordinates>
): Generator<CallEffect | PutEffect, void, IOpenMeteoDailyForecast> {
  try {
    const openMeteoDailyForecast: IOpenMeteoDailyForecast = yield call(
      OpenMeteoApi.getDailyForecast,
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