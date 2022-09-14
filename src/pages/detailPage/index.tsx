import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getIssue } from '../../apis';
import { ErrorPage, IssueBox } from '../../components';
import { Issue } from '../../contexts/IssueContext';
import LoadingLogo from '../../assets/logos/loading_logo.svg';
import ReactMarkdown from 'react-markdown';

export default function DetailPage() {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue | undefined>(undefined);
  const [error, setError] = useState(false);

  const getOneIssue = async () => {
    try {
      const data = await getIssue(id);
      setIssue({
        id: data.id,
        num: data.number,
        title: data.title,
        author: data.user.login,
        authorProfile: data.user.avatar_url,
        createdAt: data.created_at,
        commentNum: data.comments,
        bodyContents: data.body,
      });
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getOneIssue();
  }, []);

  if (error) return <ErrorPage />;
  if (issue === undefined) return <Loading src={LoadingLogo} alt="Loading.." />;
  return (
    <>
      <Header>
        <img src={issue.authorProfile} />
        <IssueBox issue={issue} />
      </Header>
      <Contents>
        <ReactMarkdown>{issue.bodyContents}</ReactMarkdown>
      </Contents>
    </>
  );
}

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-left: -8px;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
`;

const Loading = styled.img`
  margin: 10px 0 5px 0;
  width: 50px;
  height: 50px;
  animation: rotate_loading 2s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_loading {
    100% {
      transform: rotate(360deg);
    }
  }
`;
