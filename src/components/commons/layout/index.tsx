import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  min-width: 320px;
  width: 100%;
  border: 1px solid black;
  margin: 0 auto;
  padding: 0 5% 10px;
`;
