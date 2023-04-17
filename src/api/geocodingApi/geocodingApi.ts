import axios from 'axios';
import { IGeocodingApiResponse } from '@/interfaces/IGeocodingApiResponses';

export interface GeocodingApi {
  getCitiesData: (cityName: string) => Promise<IGeocodingApiResponse>;
}

const BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

async function getCitiesData<IGeocodingApiResponse>(cityName: string) {
  const { data } = await axios.get<IGeocodingApiResponse>(
    `${BASE_URL}?name=${cityName}&count=100&language=en&format=json`
  );

  return data;
}

export const geocodingApi: GeocodingApi = {
  getCitiesData,
};
