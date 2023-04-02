import { GPSCoordinates } from '@/typings/types/GPSCoordinates';

const baseUrl = 'https://api.open-meteo.com/v1';

export const getFiveDailyForecast = async ({
  latitude,
  longitude,
}: GPSCoordinates) => {
  const response = await fetch(
    `${baseUrl}/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=16&timezone=auto&daily=temperature_2m_max,temperature_2m_min,weathercode`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
