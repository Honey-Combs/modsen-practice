/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GPSCoordinates } from '@/typings/types/GPSCoordinates';
import type { RootState } from '../store';
import { localStorageManager } from '@/utils/localStorageManager';

type GeolocationState = {
  coordinates: GPSCoordinates | null;
};

const storedLocation =
  localStorageManager.getItem<GPSCoordinates>(
    'geolocation'
  );

const storedCoordinates = storedLocation ?? null;

const initialState: GeolocationState = {
  coordinates: storedCoordinates,
};

export const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    setLocation: {
      reducer(
        state,
        action: PayloadAction<GPSCoordinates>
      ) {
        state.coordinates = action.payload;
      },
      prepare(cityName: string) {
        return {
          payload: { latitude: 0, longitude: 0 },
        };
      },
    },
    autoSetLocation(state) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          state.coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        }
      );
    },
  },
});

export const { setLocation, autoSetLocation } =
  geolocationSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) =>
//   state.counter.value;

export default geolocationSlice.reducer;
