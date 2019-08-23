import styled, { keyframes } from 'styled-components';
import { slideInRight, slideInLeft } from 'react-animations';

const slideInRightAnimation = keyframes`${slideInRight}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const MessageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 4rem;
  background-color: #fe5000;

  @media (min-width: 50rem) {
    flex-direction: row;
    min-height: 5rem;
  }
`;

export const Title = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  animation: 1s ${slideInLeftAnimation};

  > span {
    padding-left: 1rem;
    font-size: 2rem;
    animation: 1s ${slideInRightAnimation};
  }

  &:hover {
    color: #ffdcb0;
  }

  @media (min-width: 45rem) {
    font-size: 2rem;
  }
`;
