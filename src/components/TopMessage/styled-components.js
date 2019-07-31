import styled, { css, keyframes } from 'styled-components';
import { slideInRight, slideOutUp } from 'react-animations';

const slideInAnimation = keyframes`${slideInRight}`;
const rollOutAnimation = keyframes`${slideOutUp}`;

export const MessageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 4rem;
  background-color: #fe5000;
  ${({ animate }) =>
    animate &&
    css`
      animation: 1s ${rollOutAnimation};
    `}

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

  > span {
    padding-left: 1rem;
    font-size: 2rem;
    animation: 1s ${slideInAnimation};
  }

  &:hover {
    color: #ffdcb0;
  }

  @media (min-width: 45rem) {
    font-size: 2rem;
  }
`;
