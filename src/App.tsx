import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';
import { IGlobalContext } from './types/GlobalContext';
import { IIssues } from './types/Issues';

export const GlobalContext = createContext<IGlobalContext>({});

function App(): JSX.Element {
  const [githubIssues, setGithubIssues] = useState<IIssues[]>([]);
  const [githubIssue, setGithubIssue] = useState();

  const value = { githubIssues, setGithubIssues, githubIssue, setGithubIssue };

  return (
    <GlobalContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
