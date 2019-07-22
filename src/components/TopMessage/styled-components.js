import styled from 'styled-components';

export const MessageWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #fe5000;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;

  @media (min-width: 45rem) {
    font-size: 2.2rem;
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
