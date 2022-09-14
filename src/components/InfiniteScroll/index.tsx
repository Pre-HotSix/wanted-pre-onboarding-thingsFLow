import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../App';
import { IIssues } from '../../types/Issues';
import Card from '../Card';
import { Container } from './style';

let index = 1;

export default function InfiniteScroll() {
  const { githubIssues } = useContext(GlobalContext);
  const [list, setList] = useState<IIssues[]>([]);

  const addList = () => {
    const items: IIssues[] = [];

    for (let i = 0; i < 10 && index * 10 + i < githubIssues.length; i++) {
      items?.push(githubIssues[index * 10 + i]);
    }
    setList([...list, ...items]);

    index++;
  };

  useEffect(() => {
    setList(
      githubIssues?.filter((el: IIssues, index: number) => {
        if (index < 10) return el;
      })
    );
  }, [githubIssues]);

  return (
    <Container>
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
      {githubIssues?.length === list?.length ? (
        ''
      ) : (
        <p className="more" onClick={addList}>
          더보기
        </p>
      )}
    </Container>
  );
}
