import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const IssueBox = styled.div`
  height: 12%;
  margin: 0 20px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.X_SMALL};
  border-bottom: 1px solid black;
`;

export const TitelBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  p:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
    padding-bottom: 4px;
  }
`;

export const CommentBox = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const AdBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
`