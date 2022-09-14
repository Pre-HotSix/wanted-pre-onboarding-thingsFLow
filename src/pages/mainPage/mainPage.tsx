import { useContext } from 'react';
import { GlobalContext } from '../../App';
import useQuery from '../../hooks/query';
import { IIssues } from '../../types/Issues';
import Card from '../../components/Card';

export default function MainPage() {
  const { githubIssues } = useContext(GlobalContext);

  useQuery();

  return (
    <div>
      {githubIssues
        ?.map((issue: IIssues, index: number) => (
          <Card key={index} issue={issue} />
        ))
        .sort(function (
          a: { props: { issue: { comments: number } } },
          b: { props: { issue: { comments: number } } }
        ) {
          return (
            -Number(a.props.issue.comments) - Number(b.props.issue.comments)
          );
        })}
    </div>
  );
}
