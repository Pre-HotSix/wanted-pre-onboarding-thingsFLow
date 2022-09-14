import React from 'react';
import styled from 'styled-components';

const IssueList = (props: any) => {
  console.log(props?.issues);
  return (
    <Container>
      <IssueContainer>
        {`#${props.issues.number} ${props.issues.title}`}
        <br></br>
        {`작성자:${props.issues.user.login}, 작성일: ${props.issues.created_at}`}
      </IssueContainer>
      <Comments>{`코멘트 : ${props.issues.comments}`}</Comments>
    </Container>
  );
};

export default IssueList;

const Container = styled.div`
  padding: 8px 0;
  display: flex;
  border-bottom: 1px solid black;
`;

const IssueContainer = styled.div`
  width: 80%;
`;

const Comments = styled.div`
  width: 20%;
`;
