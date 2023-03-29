import styled from 'styled-components';
import img1 from '@assets/img1.jpg';

export const StyledPageLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
  padding: 4rem;
  background: url(${img1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;
