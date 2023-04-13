import axios from 'axios';
import { IOpenMeteoDailyForecast, IOpenMeteoHourlyForecast } from './responseModels';
import { GPSCoordinates } from '@/typings/types/GPSCoordinates';

export interface WeatherForecastApi {
  getDailyForecast: ({ latitude, longitude }: GPSCoordinates) => Promise<IOpenMeteoDailyForecast>;
  getHourlyForecast: ({ latitude, longitude }: GPSCoordinates) => Promise<IOpenMeteoHourlyForecast>;
}

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

async function getDailyForecast<IOpenMeteoDailyForecast>({ latitude, longitude }: GPSCoordinates) {
  const { data } = await axios.get<IOpenMeteoDailyForecast>(
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&forecast_days=16&timezone=auto&daily=temperature_2m_max,temperature_2m_min,weathercode,winddirection_10m_dominant,windspeed_10m_max`
  );

  return data;
}

async function getHourlyForecast({ latitude, longitude }: GPSCoordinates) {
  const response = await fetch(
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<IOpenMeteoHourlyForecast>;
}

export const weatherForecastApi: WeatherForecastApi = {
  getDailyForecast,
  getHourlyForecast,
};
