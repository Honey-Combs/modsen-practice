/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import Select from 'react-select';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { StyledLocationSelector } from '@/components/LocationSelector/styled';

type FormData = {
  cityName: string;
};

type City = {
  label: string;
  value: string;
};

export function LocationSelector() {
  const { handleSubmit, control } = useForm<FormData>();
  const countries = [
    { label: 'Mogilev', value: 'Mogilev' },
    { label: 'Minsk', value: 'Minsk' },
  ];

  const onSubmit: SubmitHandler<FormData> = ({ cityName }: FormData) => {
    console.log(cityName);
  };

  return (
    <StyledLocationSelector>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="cityName"
          control={control}
          render={({field: {onChange}}) => (
            <Select
              options={countries}
              onChange={(selectedOption: City | null) => {
                onChange(selectedOption?.value);
              }}
            />
          )}
          rules={{ required: true }}
        />
      </form>
    </StyledLocationSelector>
  );
}
