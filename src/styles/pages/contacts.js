import styled, { css } from 'styled-components';

const FORM_WIDTH = '46rem';

export const Container = styled.div`
  width: 100%;
  min-height: 48.4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1.2rem;

  @media (min-width: 46rem) {
    padding-top: 2.4rem;
  }

  @media (min-width: 62rem) {
    height: 48.4rem;
    padding: 0;
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2.6rem;
  padding-right: 0;

  @media (min-width: 62rem) {
    margin-bottom: 0;
    padding-right: 4rem;
  }
`;

export const Image = styled.img`
  object-fit: 50%;
  max-width: 35.5rem;
  border-radius: 1rem;

  @media (min-width: 62rem) {
    min-width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 35.5rem;
  flex: 1;
  margin-bottom: 2.6rem;

  @media (min-width: 62rem) {
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

export const Title = styled.h2`
  letter-spacing: 0.1rem;
  font-size: 3rem;
  font-family: 'Lato', Arial, sans-serif;
  font-weight: 700;
  width: 100%;
  max-width: ${FORM_WIDTH};
  background: linear-gradient(120deg, #ff863b, #fe5000, #ff863b);
  background-size: 200%;
  color: #fff;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
  transition: 0.5s ease;
  border-radius: 1rem 1rem 0 0;
  margin-bottom: 0.6rem;

  &:hover {
    background-position: right;
  }

  @media (min-width: 45rem) {
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 1.5rem;
  width: 100%;
  max-width: ${FORM_WIDTH};
  height: 100%;
  position: relative;
  justify-content: space-evenly;
`;

export const FormInput = styled.div`
  position: relative;
  overflow: hidden;
  width: 90%;
  margin-bottom: 2rem;

  @media (min-width: 62rem) {
    width: 100%;
  }
`;

export const LabelName = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 0.1rem solid #000;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.1rem;
    height: 100%;
    width: 100%;
    border-bottom: 0.3rem solid #fe5000;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
`;

export const ContentName = styled.span`
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  transition: all 0.3s ease;
`;

const inputCss = css`
  width: 100%;
  color: #000;
  font-weight: 300;
  padding-top: 2rem;
  background-color: transparent;
  border: none;
  outline: none;

  /* stylelint-disable-next-line */
  &:focus + ${LabelName} ${ContentName}, &:valid + ${LabelName} ${ContentName} {
    transform: translateY(${({ textarea }) => (textarea ? '-700%' : '-150%')});
    font-size: 1.4rem;
    font-weight: bold;
    color: #fe5000;
  }

  /* stylelint-disable-next-line */
  &:focus + ${LabelName}::after, &:valid + ${LabelName}::after {
    transform: translateX(0%);
  }
`;

export const Input = styled.input`
  ${inputCss}
  height: 5rem;
`;

export const Textarea = styled.textarea`
  ${inputCss}
  height: 13rem;
  resize: none;
`;

export const Submit = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  font-size: 2rem;
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

  @media (min-width: 62rem) {
    width: 6rem;
    height: 6rem;
    font-size: 2.6rem;
    bottom: 1rem;
    right: 7rem;
  }
`;
