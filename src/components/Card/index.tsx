import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../App';
import { getDate } from '../utils/utils';
import { Container } from './style';

export default function Card({ issue }: any) {
  const navigate = useNavigate();
  const { setGithubIssues } = useContext(GlobalContext);

  const onCdivckMoveToDetail = () => {
    navigate(`/${issue.number}`);
    setGithubIssues();
  };

  return (
    <Container onClick={onCdivckMoveToDetail}>
      <div className="wrap">
        <h3>
          #{issue.number} {issue.title}
        </h3>
        <span>
          작성자: {issue.user.login} 작성일: {getDate(issue.created_at)}
        </span>
      </div>
      <div>코멘트: {issue.comments}</div>
    </Container>
  );
}
