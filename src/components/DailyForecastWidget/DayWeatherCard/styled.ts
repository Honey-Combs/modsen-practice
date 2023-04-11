import styled from 'styled-components';

export const StyledDayWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem;
  margin: 0.5rem;
  height: 10rem;
  width: 8rem;
  border-radius: 0.3rem;
  border: 0.1rem solid white;
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const StyledDayOfWeek = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledWeatherPhenomenonIcon = styled.div``;

export const StyledMaxTemperature = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const StyledMinTemperature = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
