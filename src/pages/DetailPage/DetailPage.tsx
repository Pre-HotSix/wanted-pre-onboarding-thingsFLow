import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../App';
import { GetIssue } from '../../apis';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail';

export default function DatailPage() {
  const { setGithubIssue } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    const getIssueDetail = async () => {
      const result = await GetIssue(Number(id));
      setGithubIssue(result);
      console.log(result);
    };

    getIssueDetail();
  }, []);

  return <CardDetail />;
}
