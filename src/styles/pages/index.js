import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

import homePath from '../../images/homepage.jpg';

const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const Landing = styled.section`
  margin: -1rem -1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: inset 0px -5px 11px 1px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    z-index: 1;
    width: 110%;
    height: 15rem;
    background: url(${homePath}) center no-repeat;
    background-size: cover;
    filter: blur(2px);
  }

  @media (min-width: 45rem) {
    &::before {
      height: 30rem;
    }
  }
`;

export const LandingText = styled.p`
  position: absolute;
  z-index: 2;
  animation: 1s ${slideInLeftAnimation};
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 300;
  font-size: 3rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 1);
  color: #fff;
  text-align: center;
  word-wrap: break-word;

  > span {
    font-weight: 700;
  }

  @media (min-width: 45rem) {
    font-size: 5.5rem;
  }
`;

export const HomeContent = styled.section`
  position: relative;
  padding-top: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
