import * as S from './style';
import { useContext, useRef, useEffect, useState, Fragment } from 'react';
import { IssuesContext } from '../../store/IssuesStore';
import Loading from '../../components/Loading';
import thingsflowLogo from '../../assets/png/thingsflowLogo.png';
import { Link } from 'react-router-dom';

let srcPage = 1;

export default function MainPage () {
  const value = useContext(IssuesContext); 
  const scroll = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(() => {
    if (srcPage !== 1) return srcPage;
    return 1;
  });
  const [load, setLoad] = useState(true);
  const [totalIssues, setTotalIssues] = useState(0);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setTimeout(() => {
          value?.scrollLists(page);
        }, 1500);
        setPage((prev) => prev + 1);
        srcPage = page + 1;
      }
    });
  });

  useEffect(() => {
    value?.totalIssuesApi().then(data => setTotalIssues(data.open_issues));
    scroll.current && io.observe(scroll.current);
    if (value?.issueLists && value?.issueLists.length % totalIssues === 0) setLoad(false);
  }, [value?.issueLists]);
  
  const issueBox = value?.issueLists.map((issue, index) => {
    if (index === 0) value.set(value.issueLists);
    const createdDate = new Date(issue.created_at).toLocaleDateString();
    const formatCreatedDate = createdDate.replace('.', '년').replace('.', '월').replace('.', '일');

    const issueCard = () => {
      return (
        <Link to={'/' + issue.number} key={issue.number}>
          <S.IssueBox className='single'>
            <S.TitelBox>
              <div>
                <p>
                  <span># {issue.number} </span>
                  <span>{issue.title}</span>
                </p>
                <p>
                  <span>작성자: {issue.user.login}, </span>
                  <span>작성일: {formatCreatedDate}</span>
                </p>
              </div>
            </S.TitelBox>
            <S.CommentBox>
              <p>
                코멘트: {issue.comments}
              </p>
            </S.CommentBox>
          </S.IssueBox>
        </Link>
      );
    };

    const ad = () => {
      return (
        <a href="https://thingsflow.com/ko/home">
          <S.IssueBox key={issue.id} className='single'>
            <S.AdBox>
              <img src={thingsflowLogo} alt="광고이미지" />
            </S.AdBox>
          </S.IssueBox>
        </a>
      );
    };

    if ((index + 1) === 5) {
      return (
        <Fragment key={index}>
          {ad()}
          {issueCard()}
        </Fragment>
      )
    };

    return issueCard();
  });

  const loadingBox = () => {
    return (
      <S.LoadingBox ref={scroll}>
        <Loading />
      </S.LoadingBox>
    );
  };
  

  return (
    <S.MainBox>
      {issueBox}
      {load ? loadingBox(): null}
    </S.MainBox>
  )
};
