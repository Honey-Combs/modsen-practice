import styled from 'styled-components';
import Select from 'react-select';

export const StyledLocationSelector = styled(Select)`
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  min-width: 15rem;
  color: black;
`;

export const StyledSelectorWrapper = styled.div``;