/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@/enums/LoadingState';
import { GPSCoordinates } from '@/typings/GPSCoordinates';
import { RootState } from '@/store/store';
import { IOpenMeteoDailyForecast } from '@/interfaces/IWeatherForecastApiResponses';
import { IWeatherForDay } from '@/interfaces/IWeatherForDay';

type WeatherState = {
  dailyForecast: IOpenMeteoDailyForecast | null;
  loadingState: LoadingState;
};

const initialState: WeatherState = {
  dailyForecast: null,
  loadingState: LoadingState.idle,
};

export const dailyWeatherForecastSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchDailyForecastRequested(state, action: PayloadAction<GPSCoordinates | null>) {
      state.loadingState = LoadingState.loading;
    },

    fetchDailyForecastSuccess(state, action: PayloadAction<IOpenMeteoDailyForecast>) {
      state.loadingState = LoadingState.success;
      state.dailyForecast = action.payload;
    },

    fetchDailyForecastFailed(state) {
      state.loadingState = LoadingState.error;
    },
  },
});

export const selectDailyWeatherForecast = createSelector(
  (state: RootState) => state.dailyWeather.dailyForecast?.daily,
  (daily) => {
    const arr = daily?.time.map<IWeatherForDay>((date, index) => {
      return {
        time: new Date(date),
        icon: daily.weathercode[index],
        windSpeed: daily.windspeed_10m_max[index],
        windDirection: daily.windspeed_10m_max[index],
        maxTemperature: daily.temperature_2m_max[index],
        minTemperature: daily.temperature_2m_min[index],
      };
    });

    return arr;
  }
);

export const { fetchDailyForecastRequested, fetchDailyForecastSuccess, fetchDailyForecastFailed } =
  dailyWeatherForecastSlice.actions;

export default dailyWeatherForecastSlice.reducer;
