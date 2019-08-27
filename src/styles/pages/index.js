import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';
import { Link } from 'gatsby';

import vansPath from '../../images/vans.jpeg';

const slideInRightAnimation = keyframes`${slideInRight}`;

export const Landing = styled.section`
  margin: -1rem -1rem 0;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  align-items: center;
  box-sizing: border-box;

  &::before {
    content: '';
    z-index: 1;
    width: 110%;
    height: 24rem;
    background: url(${vansPath}) center no-repeat;
    background-size: 100% 100%;
    filter: blur(1px);
    box-shadow: inset 0px -5px 11px 1px rgba(0, 0, 0, 0.2);
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
  animation: 1s ${slideInRightAnimation};
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 300;
  font-size: 4.6rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 1);
  color: #fff;
  text-align: center;
  word-wrap: break-word;

  > span {
    font-weight: 700;
  }

  @media (min-width: 56rem) {
    font-size: 7.6rem;
  }
`;

export const HomeContent = styled.section`
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  align-items: center;
`;

export const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: 64rem) {
    justify-content: space-between;
  }
`;

export const Card = styled.article`
  position: relative;
  box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8rem 1rem 10rem 1rem;
  width: 32rem;
  display: flex;
  flex-direction: row;
  height: 18rem;
  padding: 1rem;
  overflow: hidden;
  margin-bottom: 5rem;

  @media (min-width: 64rem) {
    width: 46rem;
  }
`;

export const CardImage = styled.img`
  max-width: 14rem;
  border-radius: 7rem 0.5rem 0.5rem;
  object-fit: cover;

  @media (min-width: 56rem) {
    max-width: 24rem;
  }
`;

export const CardContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex: 1;
  align-items: center;
  width: 18rem;
  flex-direction: column;
  font-family: 'Lato', Arial, sans-serif;

  @media (min-width: 45rem) {
    max-width: 100%;
  }
`;

export const CardContentTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #ff9f58;
  padding-left: 1rem;
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
  padding-left: 1rem;
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

export const MapWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const MapTitle = styled.h1`
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 2rem;

  span {
    color: #fe5000;
    font-weight: bold;
  }

  @media (min-width: 45rem) {
    font-size: 3rem;
  }
`;

export const Map = styled.img`
  border-radius: 1rem;
  object-fit: cover;
  width: 28rem;
  height: 28rem;
  margin-bottom: 1rem;

  @media (min-width: 45rem) {
    font-size: 3rem;
    width: 50%;
    height: 50%;
    margin-bottom: 4rem;
  }
`;

export const MapDescription = styled.ul`
  font-size: 1.3rem;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 45rem) {
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 3rem;
  }
`;

export const MapDescriptionItem = styled.li`
  svg {
    color: #32cd32;
    margin-right: 1rem;
  }

  color: #54585a;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 45rem) {
    margin: 0 1rem 1rem 0;
  }
`;
