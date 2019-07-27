import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

import homePath from '../../images/homepage.jpg';

const slideInDownAnimation = keyframes`${slideInDown}`;

export const Landing = styled.section`
  width: 110%;
  height: 150px;
  margin: -1rem -1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${homePath}) center no-repeat;
  background-size: cover;
  box-sizing: border-box;
  box-shadow: inset 0px -5px 11px 1px rgba(0, 0, 0, 0.3);

  @media (min-width: 45rem) {
    height: 300px;
  }
`;

export const LandingText = styled.p`
  animation: 1s ${slideInDownAnimation};
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 1);
  color: #ff9f58;
  text-align: center;
  word-wrap: break-word;

  > span {
    color: #ff9f58;
    font-weight: 700;
  }

  @media (min-width: 45rem) {
    font-size: 4.5rem;
  }
`;
