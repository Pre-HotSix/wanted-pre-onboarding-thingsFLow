import { Container } from './style';

export default function Header() {
  return (
    <Container>
      <h2>
        {process.env.REACT_APP_API_OWNER} / {process.env.REACT_APP_API_REPO}
      </h2>
    </Container>
  );
}
