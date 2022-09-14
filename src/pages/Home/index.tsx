import { useEffect } from 'react';
import { IssueBox, Layout } from '../../components';
import {
  useIssuesState,
  useIssuesDispatch,
  getIssues,
} from '../../libs/context/IssuesContext';
import { IBoard } from '../../libs/types';

export default function Home() {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data, loading, error } = state.issues;

  useEffect(() => {
    if (!data) getIssues(dispatch);
  }, [dispatch, data]);

  return (
    <Layout>
      {loading ? (
        <div>로딩중..</div>
      ) : error ? (
        <div>에러가 발생했습니다</div>
      ) : (
        data?.map((item: IBoard) => (
          <IssueBox
            key={item.id}
            id={item.id}
            title={item.title}
            number={item.number}
            author={item.user.login}
            comments={item.comments}
            createdAt={item.created_at}
          />
        ))
      )}
    </Layout>
  );
}
