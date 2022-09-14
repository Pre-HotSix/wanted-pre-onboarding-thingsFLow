import * as S from './style';

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <S.Container>
      <S.Inner>
        <S.Header>Angular / Angular-cli</S.Header>
        <S.Main>{children}</S.Main>
      </S.Inner>
    </S.Container>
  );
}
