import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3%;
  border-bottom: 1px solid black;
  padding-bottom: 1.5vh;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const LeftRow = styled.div`
  width: 100%;
  p:first-child {
    margin-top: 0.6vh;
    font-size: 1.3vmax;
    margin-bottom: 0.5vh;
    line-height: 1.8vmax;
  }
  p:last-child {
    font-size: 1vmax;
  }
`;
export const RightRow = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.2vmax;
`;
