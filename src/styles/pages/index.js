import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import { slideInLeft } from 'react-animations';

import vansPath from '../../images/vans.jpeg';

const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const Landing = styled.section`
  margin: -1rem -1rem 0;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  align-items: center;
  box-sizing: border-box;
  box-shadow: inset 0px -5px 11px 1px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    z-index: 1;
    width: 110%;
    height: 24rem;
    background: url(${vansPath}) center no-repeat;
    background-size: 100% 100%;
    filter: blur(0);
  }

  @media (min-width: 45rem) {
    margin-bottom: 5rem;

    &::before {
      height: 50rem;
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
  letter-spacing: 0.1rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 1);
  color: #fff;
  text-align: center;
  word-wrap: break-word;

  > span {
    font-weight: 700;
  }

  @media (min-width: 56rem) {
    font-size: 5.5rem;
  }
`;

export const HomeContent = styled.section`
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 0 1rem;
`;

export const Card = styled.article`
  position: relative;
  box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8rem 1rem 10rem 1rem;
  max-width: 52rem;
  display: flex;
  flex-direction: row;
  height: 18rem;
  padding: 1rem;
  overflow: hidden;
  margin-bottom: 5rem;
`;

export const CardImage = styled.img`
  max-width: 16rem;
  border-radius: 7rem 0.5rem 0.5rem;
  object-fit: cover;

  @media (min-width: 56rem) {
    max-width: 24rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 0 1rem;
  flex-direction: column;
  font-family: 'Lato', Arial, sans-serif;
`;

export const CardContentTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #ff9f58;
  margin-bottom: 1rem;

  @media (min-width: 56rem) {
    font-size: 2.4rem;
  }
`;

export const CardContentDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: #777;
  padding: 0 1rem;
  word-break: break-all;

  @media (min-width: 56rem) {
    font-size: 1.2rem;
  }
`;

export const CardContentBtn = styled(Link)`
  width: 3.6rem;
  height: 3.6rem;
  position: absolute;
  bottom: 1rem;
  right: 6rem;
  font-size: 2rem;
  padding-left: 0.2rem;
  color: #fff;
  background: linear-gradient(120deg, #ff863b, #fe5000, #ff863b);
  background-size: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  border-radius: 50%;

  &:hover {
    background-position: right;
  }

  @media (min-width: 56rem) {
    width: 4rem;
    height: 4rem;
    font-size: 2.6rem;
    padding-left: 0.4rem;
    bottom: 1rem;
    right: 7rem;
  }
`;
