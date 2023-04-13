import axios from 'axios';
import { IGeocodingApiResponse } from './responseModels';

export interface GeocodingApi {
  getCityCoordinates: (cityName: string) => Promise<IGeocodingApiResponse>;
}

const BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

async function getCityCoordinates<IGeocodingApiResponse>(cityName: string) {
  const { data } = await axios.get<IGeocodingApiResponse>(
    `${BASE_URL}?name=${cityName}&count=100&language=en&format=json`
  );

  return data;
}

export const geocodingApi: GeocodingApi = {
  getCityCoordinates,
};
