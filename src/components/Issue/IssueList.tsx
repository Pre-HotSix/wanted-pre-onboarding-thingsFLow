import { Fragment, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useIssueListState } from '../../hooks';
import IssueBox from './IssueBox';
import LoadingLogo from '../../assets/logos/loading_logo.svg';
import ThinksFlowLogo from '../../assets/logos/thinks_flow_logo.png';

export default function IssueList({ infinity }: any) {
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLImageElement>(null);
  const issueList = useIssueListState();

  useEffect(() => {
    ref.current && io.observe(ref.current);
  }, [issueList]);

  useEffect(() => {
    if (page > 1) {
      infinity(page);
    }
  }, [page]);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setTimeout(() => {
          setPage((prev) => prev + 1);
        }, 500);
      }
    });
  });

  const handleLogoClick = () => {
    window.open('https://thingsflow.com/ko/home', '_self');
  };

  if (issueList.length === 0) return <div>Loading ...</div>;
  return (
    <>
      {issueList.map((issue, i) => (
        <Fragment key={i}>
          <IssueBox issue={issue} />
          {i === 3 && (
            <LogoContainer onClick={handleLogoClick} src={ThinksFlowLogo} />
          )}
        </Fragment>
      ))}
      <Loading ref={ref} src={LoadingLogo} alt="Loading.." />
    </>
  );
}

const LogoContainer = styled.img`
  width: auto;
  height: 40px;
  margin-top: 10px;
`;

const Loading = styled.img`
  margin: 10px 0 5px 0;
  width: 50px;
  height: 50px;
  animation: rotate_loading 2s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_loading {
    100% {
      transform: rotate(360deg);
    }
  }
`;
