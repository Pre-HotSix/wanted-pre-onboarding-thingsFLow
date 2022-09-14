import { useEffect } from 'react';
import {
  useIssuesState,
  useIssuesDispatch,
  getIssue,
} from '../../libs/context/IssuesContext';
import { Layout } from '../../components';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import MDEditor from '@uiw/react-md-editor';

export default function IssueDetail() {
  const { pathname } = useLocation();
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  useEffect(() => {
    getIssue(dispatch, pathname);
  }, [dispatch, pathname]);

  const { data, loading, error } = state.issue;

  return (
    <Layout>
      {loading ? (
        <div>로딩중..</div>
      ) : error ? (
        <div>에러가 발생했습니다</div>
      ) : (
        <>
          <S.Header>
            <S.LeftRow>
              <img src={data?.user.avatar_url} />
              <div>
                <p>
                  #{data?.number} {data?.title}
                </p>
                <p>작성자: {data?.user.login}, 작성일:</p>
              </div>
            </S.LeftRow>
            <S.RightRow>코멘트: {data?.comments}</S.RightRow>
          </S.Header>
          <S.Main>
            <MDEditor.Markdown source={data?.body} />
          </S.Main>
        </>
      )}
    </Layout>
  );
}
