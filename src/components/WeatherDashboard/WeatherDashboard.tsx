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
import {
  autoSetLocation,
  selectCurrentLocation,
} from '@/store/slices/geolocationSlice';

export function WeatherDashboard() {
  const dispatch = useDispatch();
  dispatch(autoSetLocation);
  const currentLocation = useSelector((state: RootState) =>
    selectCurrentLocation(state)
  );

  useEffect(() => {
    if (currentLocation === null) {
      dispatch(autoSetLocation);
    }

    dispatch(fetchDailyForecastRequested(currentLocation));
  }, [currentLocation, dispatch]);

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
