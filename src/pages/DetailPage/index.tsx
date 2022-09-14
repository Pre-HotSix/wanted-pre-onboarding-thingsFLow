import * as S from './style';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { IssuesContext } from '../../store/IssuesStore';
import MDEditor from '@uiw/react-md-editor';
import ErrorPage from '../ErrorPage';

export default function DetailPage () {
  const value = useContext(IssuesContext);
  const { id } = useParams();
  const [issue, setIssue] = useState<any>(undefined);
  const [error, setError] = useState(false);

  const getOneIssue = async () => {
    try {
      const data = await value?.singleIssueApi(id);
      if (data.state === 'closed') throw new Error;

      const createdDate = new Date(data.createdAt).toLocaleDateString();
      const formatCreatedDate = createdDate.replace('.', '년').replace('.', '월').replace('.', '일');

      setIssue({
        id: data.id,
        num: data.number,
        title: data.title,
        author: data.user.login,
        authorProfile: data.user.avatar_url,
        createdAt: formatCreatedDate,
        comments: data.comments,
        body: data.body,
      });
    } catch (error) {
      setError(true);
    }
  };
  
  useEffect(() => {
    getOneIssue();
  }, []);

  if (error) return <ErrorPage />;
  if (issue === undefined) return (<div>Loading...</div>);

  const issueHead = () => {
    return (
      <S.IssueHeadBox className='single'>
        <S.ProfileBox>
          <img src={issue.authorProfile} alt="프로필이미지" />
        </S.ProfileBox>
        <S.TitelBox>
          <p>
            <span># {issue.num} </span>
            <span>{issue.title}</span>
          </p>
          <p>
            <span>작성자: {issue.author}, </span>
            <span>작성일: {issue.createdAt}</span>
          </p>
        </S.TitelBox>
        <S.CommentBox>
          <p>
            코멘트: {issue.comments}
          </p>
        </S.CommentBox>
      </S.IssueHeadBox>
    );
  };

  const issueBody = () => {
    return (
      <S.IssueBodyBox>
        <MDEditor.Markdown source={issue.body} />
      </S.IssueBodyBox>
    );
  };


  return (
    <S.DetailBox>
      {issueHead()}
      {issueBody()}
    </S.DetailBox>
  );
};