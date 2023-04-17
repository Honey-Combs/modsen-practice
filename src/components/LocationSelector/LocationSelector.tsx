/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledLocationSelector, StyledSelectorWrapper } from './styled';
import {
  fetchCitiesByNameRequested,
  selectCities,
} from '@/store/slices/geocodingSlice';
import { RootState } from '@/store/store';
import { GPSCoordinates } from '@/typings/GPSCoordinates';
import { setLocation } from '@/store/slices/geolocationSlice';

type City = {
  label: string;
  value: GPSCoordinates | null;
};

export function LocationSelector() {
  const cities = useSelector((state: RootState) => selectCities(state));
  const dispatch = useDispatch();

  const options = cities?.map<City>(({ name, latitude, longitude }) => {
    return { label: `${name}`, value: { latitude, longitude } };
  });

  const onChange = (selectedOption: City | unknown) => {
    dispatch(setLocation((selectedOption as City)?.value) ?? null);
  };

  const onInputChange = (text: string) => {
    console.log(text);
    dispatch(fetchCitiesByNameRequested(text));
  };

  return (
    <StyledSelectorWrapper>
      <StyledLocationSelector
        options={options}
        onChange={onChange}
        onInputChange={onInputChange}
      />
    </StyledSelectorWrapper>
  );
}
