import React from 'react';
import { DateTimeWidget } from '@components/DateTimeWidget';
import { LocationSelector } from '@components/LocationSelector';
import { CalendarEventsWidget } from '@/components/CalendarEventsWidget';
import { DailyForecastWidget } from '@/components/DailyForecastWidget';
import { HourlyForecastWidget } from '@/components/HourlyForecastWidget';
import {
  StyledWeatherDashboard,
  StyledTopSection,
  StyledMiddleSection,
  StyledBottomSection,
} from './styled';

export function WeatherDashboard() {
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
