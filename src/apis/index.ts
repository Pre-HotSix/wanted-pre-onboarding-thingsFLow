import axios from 'axios';

const ACCESS_TOKEN = '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';
const OWNER = 'angular';
const REPO = 'angular-cli';
const STATE = 'open';
const SORT = 'comments';

const apiRoot = axios.create({
  method: 'get',
  baseURL: `https://api.github.com/repos/${OWNER}/${REPO}`,
  headers: { 
    'Accept': 'application/vnd.github+json',
    'Authorization': `token ${ACCESS_TOKEN}`
  },
});

const issuesApi = async (page: number) => {
  const response = await axios.get(`https://api.github.com/repos/${OWNER}/${REPO}/issues?state=${STATE}&sort=${SORT}&page=${page}`, 
  {
    headers: { 
      'Accept': 'application/vnd.github+json',
      'Authorization': `token ${ACCESS_TOKEN}`
    },
  });

  return response.data;
};

const totalIssuesApi = async () => {
  const response = await axios.get(`https://api.github.com/repos/${OWNER}/${REPO}`, 
  {
    headers: { 
      'Accept': 'application/vnd.github+json',
      'Authorization': `token ${ACCESS_TOKEN}`
    },
  });
  
  return response.data;
};

const singleIssueApi = async (issue_number: string | undefined) => {
  try {
    const { data } = await apiRoot(`/issues/${issue_number}`);

    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export { OWNER, REPO, issuesApi, totalIssuesApi, singleIssueApi };