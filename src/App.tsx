import React from 'react';
import { PageLayout } from '@/layouts/PageLayout/PageLayout';
import { WeatherDashboard } from '@/components/WeatherDashboard/WeatherDashboard';

export function App() {
  return (
    <PageLayout>
      <WeatherDashboard />
    </PageLayout>
  );
}
