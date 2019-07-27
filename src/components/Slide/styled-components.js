import Styled, { css } from 'styled-components';

export const SlideContainer = Styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SlideImage = Styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
`;

const chevronStyles = css`
  position: absolute;
  background: none;
  border: none;
  font-size: 2rem;
  top: 50%;
  color: #fff;

  &:hover {
    color: #fe5000;
  }
`;

export const ChevronLeft = Styled.button`
  ${chevronStyles}
  left: 10px;
`;

export const ChevronRight = Styled.button`
  ${chevronStyles}
  right: 10px;
`;
