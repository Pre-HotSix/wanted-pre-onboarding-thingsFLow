import styled from "styled-components";

export const DetailBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const IssueHeadBox = styled.div`
  height: 12%;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.X_SMALL};
  border-bottom: 1px solid black;
`;

export const ProfileBox = styled.div`
  width: 15%;
  position: relative;
  > img {
    width: 80%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
`;

export const TitelBox = styled.div`
  width: 65%;
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

export const IssueBodyBox = styled.div`
  div {
    padding: 20px 0;
    white-space: pre-wrap;
    > * {
      margin: 0;
    }
  }
`;