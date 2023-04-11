import { IWeather } from './IWeather';

export interface IWeatherForDay extends IWeather {
  maxTemperature: number;
  minTemperature: number;
}
