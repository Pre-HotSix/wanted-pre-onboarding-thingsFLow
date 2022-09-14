import { useContext } from 'react';
import { GlobalContext } from '../../App';
import { getDate } from '../utils/utils';
import { Container } from './style';

export default function CardDetail() {
  const { githubIssue } = useContext(GlobalContext);
  console.log(githubIssue);

  return (
    <Container>
      <div className="topWrap">
        <img src={githubIssue?.user.avatar_url} />
        <div className="border">
          <div>
            <p>
              #{githubIssue?.number} {githubIssue?.title}
            </p>
            <p>
              작성자: {githubIssue?.user.login} 작성일:{' '}
              {getDate(githubIssue?.created_at)}
            </p>
          </div>
          <div>{githubIssue?.comments}</div>
        </div>
      </div>
      <p className="content">{githubIssue?.body}</p>
    </Container>
  );
}
