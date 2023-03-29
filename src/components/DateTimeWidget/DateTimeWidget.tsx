import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  StyledDateTimeWidget,
  StyledClock,
  StyledTime,
  StyledTimeOfDayLabel,
  StyledDate,
} from './styled';

export function DateTimeWidget() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const time = moment(date).format('HH:mm:ss');
  const timeOfDayLabel = moment(date).format('A');
  const formattedDate = moment(date).format(
    'dddd, D MMMM YYYY'
  );

  return (
    <StyledDateTimeWidget>
      <StyledClock>
        <StyledTime>{time}</StyledTime>
        <StyledTimeOfDayLabel>
          {timeOfDayLabel}
        </StyledTimeOfDayLabel>
      </StyledClock>
      <StyledDate>{formattedDate}</StyledDate>
    </StyledDateTimeWidget>
  );
}
