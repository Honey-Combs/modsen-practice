export interface IOpenMeteoDailyForecast
  extends IBasicParameters {
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    weathercode: string;
    winddirection_10m_dominant: string;
    windspeed_10m_max: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
    winddirection_10m_dominant: number[];
    windspeed_10m_max: number[];
  };
}

export interface IOpenMeteoHourlyForecast
  extends IBasicParameters {
  hourly_units: {
    time: string;
    temperature_2m: string;
    weathercode: string;
    winddirection_10m: string;
    windspeed_10m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
    winddirection_10m: number[];
    windspeed_10m: number[];
  };
}

interface IBasicParameters {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
}
