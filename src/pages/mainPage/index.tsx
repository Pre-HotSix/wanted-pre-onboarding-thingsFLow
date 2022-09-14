import { useEffect } from 'react';
import { getIssueList } from '../../apis';
import { IssueList } from '../../components';
import { useIssueListDispatch } from '../../hooks';

export default function MainPage() {
  const dispatch = useIssueListDispatch();

  const getData = async (page: number) => {
    try {
      const response = await getIssueList(page);
      response.map((res: any) => {
        dispatch({
          type: 'STORE',
          issue: {
            id: res.id,
            num: res.number,
            title: res.title,
            author: res.user.login,
            authorProfile: res.user.avatar_url,
            createdAt: res.created_at,
            commentNum: res.comments,
            bodyContents: res.body,
          },
        });
      });
    } catch (error) {}
  };
  useEffect(() => {
    getData(1);
  }, []);

  return <IssueList infinity={getData} />;
}
