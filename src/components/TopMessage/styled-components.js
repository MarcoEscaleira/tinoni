import styled from 'styled-components';

export const MessageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: #fe5000;

  @media (min-width: 50rem) {
    flex-direction: row;
    height: 6rem;
  }
`;

export const Time = styled.p`
  display: flex;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  cursor: default;
  margin-bottom: 1.2rem;

  svg {
    margin-right: 1rem;
  }

  svg:last-of-type {
    margin-left: 2rem;
  }

  @media (min-width: 50rem) {
    position: absolute;
    left: 3rem;
    margin-bottom: 0;
    font-size: 2rem;
  }
`;

export const TimeSpan = styled.span`
  font-weight: 300;
`;

export const Title = styled.a.attrs(({ href }) => ({
  href,
}))`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;

  > span {
    padding-left: 1rem;
    font-size: 2rem;
  }

  @media (min-width: 45rem) {
    font-size: 2rem;
  }
`;

export const CloseContainer = styled.button.attrs(({ onClick }) => ({
  onClick,
}))`
  position: absolute;
  top: 5px;
  right: 10px;
  color: #fff;
  font-size: 1.6rem;
  background: none;
  border: none;
`;
