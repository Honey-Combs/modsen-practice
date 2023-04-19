/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GPSCoordinates } from '@/typings/GPSCoordinates';
import type { RootState } from '../store';
import { localStorageManager } from '@/utils/localStorageManager';
import { LoadingState } from '@/enums/LoadingState';

type GeolocationState = {
  currentLocation: GPSCoordinates | null;
  loadingState: LoadingState;
};

const storedLocation = localStorageManager.getItem<GPSCoordinates>(
  'geolocation'
) ?? { latitude: 1, longitude: 12 };

const initialState: GeolocationState = {
  currentLocation: storedLocation,
  loadingState: LoadingState.idle,
};

export const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<GPSCoordinates | null>) {
      state.currentLocation = action.payload;
    },

    autoSetLocationRequested(state, action: PayloadAction<string>) {
      state.loadingState = LoadingState.loading;
    },

    autoSetLocationFailed(state) {
      state.loadingState = LoadingState.error;
    },

    autoSetLocation(state) {
      navigator.geolocation.getCurrentPosition((position) => {
        state.currentLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
    },
  },
});

export const selectCurrentLocation = (state: RootState) => {
  return state.geolocation.currentLocation;
};

export const { setLocation, autoSetLocation } = geolocationSlice.actions;

export default geolocationSlice.reducer;
