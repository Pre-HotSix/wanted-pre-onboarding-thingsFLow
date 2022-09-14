import { ThemeProvider } from 'styled-components';
import { IssueListContextProvider } from './contexts/IssueContext';
import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IssueListContextProvider>
        <GlobalStyle />
        <Router />
      </IssueListContextProvider>
    </ThemeProvider>
  );
}

export default App;
