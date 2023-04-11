import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { StyledDailyForecastWidget } from './styled';
import { selectDailyWeatherForecast } from '@/store/slices/dailyWeatherForecastSlice';
import { RootState } from '@/store/store';
import { DayWeatherCard } from '@/components/DailyForecastWidget/DayWeatherCard';

export function DailyForecastWidget() {
  const dailyWeatherForecast = useSelector((state: RootState) => selectDailyWeatherForecast(state));
  const dailyForecast = dailyWeatherForecast?.map((weatherForDay) => (
    <DayWeatherCard key={nanoid()} weatherForDay={weatherForDay} />
  ));
  return <StyledDailyForecastWidget>{dailyForecast}</StyledDailyForecastWidget>;
}
