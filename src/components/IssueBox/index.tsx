import { useNavigate } from 'react-router-dom';
import * as S from './style';

type Prop = {
  id: number;
  title: string;
  number: number;
  author: string;
  comments: number;
  createdAt: string;
};

export default function IssueBox({
  title,
  number,
  author,
  comments,
  createdAt,
}: Prop) {
  const navigate = useNavigate();
  const parseDate = new Date(createdAt);

  return (
    <S.Container onClick={() => navigate(`/${number}`)}>
      <S.LeftRow>
        <p>
          #{number} {title}
        </p>
        <p>
          작성자: {author}, 작성일: {parseDate.toLocaleDateString()}
        </p>
      </S.LeftRow>
      <S.RightRow>코멘트: {comments}</S.RightRow>
    </S.Container>
  );
}
