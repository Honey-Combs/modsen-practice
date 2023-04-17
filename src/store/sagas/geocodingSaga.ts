import { PayloadAction } from '@reduxjs/toolkit';
import {
  CallEffect,
  PutEffect,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { IGeocodingApiResponse } from '@/interfaces/IGeocodingApiResponses';
import { geocodingApi } from '@/api/geocodingApi/geocodingApi';
import {
  fetchCitiesByNameFailed,
  fetchCitiesByNameRequested,
  fetchCitiesByNameSuccess,
} from '@/store/slices/geocodingSlice';

export function* fetchCities(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, IGeocodingApiResponse> {
  try {
    const cities: IGeocodingApiResponse = yield call(
      geocodingApi.getCitiesData,
      action.payload
    );

    yield put(fetchCitiesByNameSuccess(cities));
  } catch (error) {
    yield put(fetchCitiesByNameFailed);
  }
}

export function* geocodingSaga() {
  yield takeEvery(fetchCitiesByNameRequested.type, fetchCities);
}
