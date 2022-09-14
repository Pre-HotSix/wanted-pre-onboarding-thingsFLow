import * as S from './style';
import { useLocation } from "react-router-dom";
import { useContext } from 'react';
import { IssuesContext } from '../../store/IssuesStore';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface stateGuard {
  index: number
};

export default function DetailPage () {
  const value = useContext(IssuesContext); 
  const state = useLocation().state as stateGuard;
  const index = state.index;
  const issues = value?.get();
  const mainIssue = issues[index];

  const createdDate = new Date(mainIssue.created_at).toLocaleDateString();
  const formatCreatedDate = createdDate.replace('.', '년').replace('.', '월').replace('.', '일');

  const issueHead = () => {
    return (
        <S.IssueHeadBox className='single'>
          <S.ProfileBox>
            <img src={mainIssue.user.avatar_url} alt="프로필이미지" />
          </S.ProfileBox>
          <S.TitelBox>
            <p>
              <span># {mainIssue.number} </span>
              <span>{mainIssue.title}</span>
            </p>
            <p>
              <span>작성자: {mainIssue.user.login}, </span>
              <span>작성일: {formatCreatedDate}</span>
            </p>
          </S.TitelBox>
          <S.CommentBox>
            <p>
              코멘트: {mainIssue.comments}
            </p>
          </S.CommentBox>
        </S.IssueHeadBox>
    );
  };

  const issueBody = () => {
    return (
      <S.IssueBodyBox>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
          components={{
            code({inline, className, children}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                  style={docco}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code>
                  {children}
                </code>
              )
            }
          }}
        >
          {mainIssue.body}
        </ReactMarkdown>
        
      </S.IssueBodyBox>
    );
  };


  return (
    <S.DetailBox>
      {issueHead()}
      {issueBody()}
    </S.DetailBox>
  );
}