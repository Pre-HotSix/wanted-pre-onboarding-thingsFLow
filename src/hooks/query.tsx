import { useContext, useEffect } from 'react';
import { GetIssues } from '../apis';
import { GlobalContext } from '../App';

export default function useQuery() {
  const { setGithubIssues } = useContext(GlobalContext);

  const refetch = async () => {
    const data = await GetIssues();
    setGithubIssues(data);
  };

  useEffect(() => {
    refetch();
  }, []);

  return { refetch };
}
