import * as S from './style';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <S.LayoutContainer>
      <S.LineBox>
        <Link to="/">
          <S.ErrorBox>
              <p>
                <span>404 </span>
                <span>페이지를 찾을 수 없습니다</span>
              </p>
              <p>(화면을 클릭하면 메인으로 이동합니다)</p>
          </S.ErrorBox>
        </Link>
      </S.LineBox>
    </S.LayoutContainer>
  );
}