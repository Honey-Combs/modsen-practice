import styled from 'styled-components';

export const StyledCarousel = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${({ theme }) => theme.fonts.title};
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  width: 2rem;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  font-family: ${({ theme }) => theme.fonts.title};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
`;
