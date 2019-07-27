import styled from 'styled-components';

export const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.main`
  width: 100%;
  flex: 1;
  padding: 1rem 1rem 0;
  display: flex;
  flex-direction: column;
`;
