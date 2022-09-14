import styled from 'styled-components';
import { Issue } from '../../contexts/IssueContext';
import { useNavigate } from 'react-router-dom';

type issueProps = {
  issue: Issue;
};

export default function IssueBox({ issue }: issueProps) {
  const navigate = useNavigate();
  const convertDate = (time: string): string => {
    const date = new Date(time);

    return (
      date.getFullYear() +
      '년 ' +
      (date.getMonth() + 1) +
      '월 ' +
      date.getDay() +
      '일'
    );
  };

  const handleDetailPage = () => {
    navigate(`/${issue.num}`);
  };
  return (
    <Container onClick={handleDetailPage}>
      <InfoWrapper flex="5">
        <div>
          <span>#{issue.num} </span>
          <span>{issue.title}</span>
        </div>
        <div>
          <span>작성자: {issue.author}, </span>
          <span>작성일: {convertDate(issue.createdAt)}</span>
        </div>
      </InfoWrapper>
      <InfoWrapper flex="1">
        <span>코멘트: {issue.commentNum}</span>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 95%;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BLACK};

  div:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.SMALL};
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }
  div:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.X_SMALL};
  }
`;

const InfoWrapper = styled.div<{ flex: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: ${(props) => props.flex};
`;
