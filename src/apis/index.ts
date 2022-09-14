import axios from 'axios';

const OWNER = 'angular';
const REPO = 'angular-cli';
const STATE = 'open';
const SORT = 'comments';

const apiRoot = axios.create({
  method: 'get',
  baseURL: `${process.env.REACT_APP_API_URL}/${OWNER}/${REPO}`
});

const issuesApi = async (page: number) => {
  try {
    const { data } = await apiRoot(`/issues?state=${STATE}&sort=${SORT}&page=${page}`);
    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};

const totalIssuesApi = async () => {
  try {
    const { data } = await apiRoot('');
    return data;
  } catch (err) {
    throw new Error('not found page');
  }
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