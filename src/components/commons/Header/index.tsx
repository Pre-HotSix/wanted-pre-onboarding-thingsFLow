import * as S from './style';
import { useContext } from 'react';
import { IssuesContext } from '../../../store/IssuesStore'

export default function Header() {
  const value = useContext(IssuesContext); 

  return (
    <S.HeaderBox>
      <div>
        <span>{value?.owner}</span>
        <span> / </span>
        <span>{value?.repo}</span>
      </div>
    </S.HeaderBox>
  )
};