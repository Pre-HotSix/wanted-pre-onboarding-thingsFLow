import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const LineBox = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100%;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    width: 100%;
    height: 100%;
  }
`;

export const ErrorBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.TITLE};
  * {
    padding: 5px 0;
  }
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  }
`;