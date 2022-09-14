import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getOrganization, getOrganizationIssues } from './apis';
import Layout from './components/commons/layout';
import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';

export const MyContext = createContext(null);

function App() {
  const [issues, setIssues] = useState();
  const [organization, setOrganization] = useState();
  useEffect(() => {
    const getOrganizationIssue = async () => {
      const result = await getOrganizationIssues();
      setIssues(result);
    };
    getOrganizationIssue();
    const getOrganizations = async () => {
      const result = await getOrganization();
      setOrganization(result);
    };
    getOrganizations();
  }, []);

  return (
    <MyContext.Provider value={{ issues, organization }}>
      <Layout>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </Layout>
    </MyContext.Provider>
  );
}

export default App;
