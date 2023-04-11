import { IWeather } from '@/typings/interfaces/IWeather';

export interface IWeatherForDay extends IWeather {
  temperature: number;
}
