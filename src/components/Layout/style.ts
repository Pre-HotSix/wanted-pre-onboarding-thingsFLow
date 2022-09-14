import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  height: 100vh;
  padding: 10vh 0;
`;
export const Inner = styled.div`
  border: 10px solid black;
  width: 100%;
  height: 80vh;
`;
export const Header = styled.header`
  font-size: 2vmax;
  text-align: center;
  padding-top: 1vh;
  padding-bottom: 3vh;
`;
export const Main = styled.main`
  overflow-y: scroll;
  height: 72vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;
