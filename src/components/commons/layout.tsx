import { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from '../../App';

type MyComponentProps = {
  children: ReactNode;
};

const Layout = ({ children }: MyComponentProps) => {
  const { organization }: any = useContext(MyContext);
  console.log(organization);
  return (
    <Container>
      <Header>
        {organization?.name}/ {organization?.owner.login}
      </Header>
      <MainContainer>{children}</MainContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  min-height: 100vh;
  height: 100%;
  border: 5px solid black;
  padding: 16px;
  padding-bottom: 0;
`;

const Header = styled.header`
  font-size: 20px;
  text-align: center;
`;

const MainContainer = styled.section``;
