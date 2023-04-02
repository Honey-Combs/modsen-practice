/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IWeatherForDay } from '@/typings/interfaces/IWeatherForDay';

enum LoadingState {
  idle,
  loading,
  success,
  error,
}

type WeatherState = {
  dailyForecast: IWeatherForDay[];
  loadingState: LoadingState;
  error: boolean | null;
};

const initialState: WeatherState = {
  dailyForecast: [],
  loadingState: LoadingState.idle,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchDailyForecast(state) {
      state.loadingState = LoadingState.loading;
    },
    fetchDailyForecastSuccess(
      state,
      action: PayloadAction<IWeatherForDay[]>
    ) {
      state.loadingState = LoadingState.success;
      state.dailyForecast = action.payload;
    },
    fetchDailyForecastFailed(state) {
      state.loadingState = LoadingState.error;
    },
  },
});

export const {
  fetchDailyForecast,
  fetchDailyForecastSuccess,
  fetchDailyForecastFailed,
} = weatherSlice.actions;

export default weatherSlice.reducer;
