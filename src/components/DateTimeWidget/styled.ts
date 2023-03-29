import styled from 'styled-components';

export const StyledDateTimeWidget = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
`;

export const StyledClock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const StyledTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0.2rem;
`;

export const StyledTimeOfDayLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0.2rem;
`;

export const StyledDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding: 0.2rem;
`;
