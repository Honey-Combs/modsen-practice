import React from 'react';
import moment from 'moment';
import {
  StyledDayOfWeek,
  StyledDayWeatherCard,
  StyledMaxTemperature,
  StyledMinTemperature,
  StyledWeatherPhenomenonIcon,
} from './styled';
import { IWeatherForDay } from '@/typings/interfaces/IWeatherForDay';

export type DayWeatherCardProps = {
  weatherForDay: IWeatherForDay;
};

export function DayWeatherCard({
  weatherForDay: weather,
}: DayWeatherCardProps) {
  const formattedDate = moment(weather.time).format(
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
