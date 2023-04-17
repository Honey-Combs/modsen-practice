/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@/enums/LoadingState';
import { IGeocodingApiResponse } from '@/interfaces/IGeocodingApiResponses';
import { RootState } from '@/store/store';
import { ICity } from '@/interfaces/ICity';

type GeocodingState = {
  cities: IGeocodingApiResponse | null;
  loadingState: LoadingState;
};

const initialState: GeocodingState = {
  cities: null,
  loadingState: LoadingState.idle,
};

export const geocodingSlice = createSlice({
  name: 'geocoding',
  initialState,
  reducers: {
    fetchCitiesByNameRequested(state, action: PayloadAction<string>) {
      state.loadingState = LoadingState.loading;
    },

    fetchCitiesByNameSuccess(
      state,
      action: PayloadAction<IGeocodingApiResponse>
    ) {
      state.loadingState = LoadingState.success;
      state.cities = action.payload;
    },

    fetchCitiesByNameFailed(state) {
      state.loadingState = LoadingState.error;
    },
  },
});

export const selectCities = createSelector(
  (state: RootState) => state.geocoding.cities?.results,
  (results) =>
    results?.map<ICity>(({ name, latitude, longitude, country, admin1 }) => {
      return {
        name,
        latitude,
        longitude,
        country,
        firstAdministrativeLevel: admin1,
      };
    })
);

export const {
  fetchCitiesByNameRequested,
  fetchCitiesByNameSuccess,
  fetchCitiesByNameFailed,
} = geocodingSlice.actions;

export default geocodingSlice.reducer;
