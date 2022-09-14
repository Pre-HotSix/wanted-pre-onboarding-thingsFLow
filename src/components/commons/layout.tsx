import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>Angular / Angular-cli</Title>
        <Outlet />
      </InnerContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 60vw;
  height: 100vh;
  border: 5px solid ${({ theme }) => theme.colors.BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.BLACK};
  margin-bottom: 40px;
`;
