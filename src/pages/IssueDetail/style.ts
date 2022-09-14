import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 0 3%;
  border-bottom: 1px solid black;
  padding-bottom: 1.5vh;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const LeftRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > img {
    width: 15%;
    height: 3.5vh;
    border: 1px solid black;
    margin-right: 3%;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    & > p:first-child {
      margin-top: 0.6vh;
      font-size: 1.8vmax;
      margin-bottom: 0.5vh;
    }
    & > p:last-child {
      font-size: 1vmax;
    }
  }
`;
export const RightRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  font-size: 1.2vmax;
`;
export const Main = styled.main`
  margin: 0 3%;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;
