import React from 'react';
import moment from 'moment';
import { IWeatherForDay } from '@/typings/interfaces/IWeatherForDay';
import {
  StyledDayOfWeek,
  StyledDayWeatherCard,
  StyledMaxTemperature,
  StyledMinTemperature,
  StyledWeatherPhenomenonIcon,
} from './styled';

export type DayWeatherCardProps = {
  weather: IWeatherForDay;
};

export function DayWeatherCard({
  weather,
}: DayWeatherCardProps) {
  const formattedDate = moment(weather.date).format(
    '	ddd, D MMM'
  );

  return (
    <StyledDayWeatherCard>
      <StyledDayOfWeek>{formattedDate}</StyledDayOfWeek>
      <StyledWeatherPhenomenonIcon>
        {weather.icon}
      </StyledWeatherPhenomenonIcon>
      <StyledMaxTemperature>
        {weather.maxTemperature}
      </StyledMaxTemperature>
      <StyledMinTemperature>
        {weather.minTemperature}
      </StyledMinTemperature>
    </StyledDayWeatherCard>
  );
}
