import React, { useEffect } from 'react';
import { DateTimeWidget } from '@components/DateTimeWidget';
import { LocationSelector } from '@components/LocationSelector';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarEventsWidget } from '@/components/CalendarEventsWidget';
import { DailyForecastWidget } from '@/components/DailyForecastWidget';
import { HourlyForecastWidget } from '@/components/HourlyForecastWidget';
import {
  StyledWeatherDashboard,
  StyledTopSection,
  StyledMiddleSection,
  StyledBottomSection,
} from './styled';
import { fetchDailyForecastRequested } from '@/store/slices/dailyWeatherForecastSlice';
import { RootState } from '@/store/store';

export function WeatherDashboard() {
  const dispatch = useDispatch();
  // const weather = useSelector((state: RootState) => state.weather.dailyForecast);
  // console.log(weather);

  useEffect(() => {
    dispatch(fetchDailyForecastRequested({ latitude: 53.900716, longitude: 30.33136 }));
  }, [dispatch]);

  return (
    <StyledWeatherDashboard>
      <StyledTopSection>
        <DateTimeWidget />
        <LocationSelector />
      </StyledTopSection>

      <StyledMiddleSection>
        <CalendarEventsWidget />
      </StyledMiddleSection>

      <StyledBottomSection>
        <DailyForecastWidget />
        <HourlyForecastWidget />
      </StyledBottomSection>
    </StyledWeatherDashboard>
  );
}
