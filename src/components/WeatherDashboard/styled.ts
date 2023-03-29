import styled from 'styled-components';

export const StyledWeatherDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 3rem 0 rgba(255, 255, 255, 0.4);
  color: white;
  border-radius: 2rem;
  padding: 2rem;
`;

export const StyledTopSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledMiddleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const StyledBottomSection = styled.div`
  display: flex;
  flex-direction: column;
`;
