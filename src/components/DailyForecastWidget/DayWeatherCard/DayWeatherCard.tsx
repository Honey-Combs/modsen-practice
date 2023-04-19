import React from 'react';
import moment from 'moment';
import { IWeatherForDay } from '@interfaces/IWeatherForDay';
import {
  StyledDayOfWeek,
  StyledDayWeatherCard,
  StyledTemperature,
  StyledWeatherPhenomenonIcon,
} from './styled';
import { weatherConditions } from '@/constants/weatherConditions';

export type DayWeatherCardProps = {
  weatherForDay: IWeatherForDay;
};

export function DayWeatherCard({
  weatherForDay: weather,
}: DayWeatherCardProps) {
  const formattedDate = moment(weather.time).format('	ddd, D MMM');

  return (
    <StyledDayWeatherCard>
      <StyledDayOfWeek>{formattedDate}</StyledDayOfWeek>
      <StyledWeatherPhenomenonIcon>
        {weatherConditions.get(weather.weathercode)}
      </StyledWeatherPhenomenonIcon>
      <StyledTemperature>
        {`${weather.minTemperature} ... ${weather.maxTemperature} °C`}
      </StyledTemperature>
    </StyledDayWeatherCard>
  );
}
