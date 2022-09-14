import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from '../../App';
import IssueList from './issueList';

const MainPage = () => {
  const { issues } = useContext(MyContext);
  return (
    <Container>
      {issues?.map((item, index) => (
        <IssueList key={item.index} issues={item}></IssueList>
      ))}
    </Container>
  );
};

export default MainPage;

const Container = styled.div``;
