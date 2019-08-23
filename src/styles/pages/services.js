import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  margin: -1rem -1rem -1rem;
`;

export const Service = styled.section`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #fff;

  &::after {
    content: '';
    z-index: 1;
    width: 110%;
    height: 40rem;
    background: url(${({ src }) => src}) center no-repeat;
    background-size: 100% 100%;
    filter: blur(1px);
    box-shadow: inset 0px -3px 7px 1px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 45rem) {
    &::after {
      max-width: 62rem;
      height: 50rem;
    }
  }
`;

export const ServiceContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServiceTitle = styled.p`
  font-family: 'Lato', Arial, sans-serif;
  font-weight: 700;
  font-size: 4rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 1);
  text-align: center;
  word-wrap: break-word;
  width: 32rem;
  margin-bottom: 3rem;

  @media (min-width: 56rem) {
    width: 55rem;
    font-size: 7rem;
  }
`;

export const ServiceDescription = styled.ul`
  font-size: 1.5rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 1);
  text-align: center;
  list-style: none;
  max-width: 27rem;

  @media (min-width: 56rem) {
    max-width: 32rem;
  }
`;

export const ServiceType = styled.li`
  padding: 0 1rem;
  line-height: 3rem;
  font-family: 'Lato', Arial, sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  height: 3rem;
  margin-bottom: 1rem;

  span {
    flex: 1;
    text-align: center;
  }

  svg {
    color: #32cd32;
    margin-left: 1rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
