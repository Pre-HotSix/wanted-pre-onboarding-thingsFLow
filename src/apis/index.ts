import axios from 'axios';

// const ACCESS_TOKEN = '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';
const OWNER = 'angular';
const REPO = 'angular-cli';
const STATE = 'open';
const SORT = 'comments';

const issuesApi = async (page: number) => {
  const response = await axios.get(`https://api.github.com/repos/${OWNER}/${REPO}/issues?state=${STATE}&sort=${SORT}&page=${page}`) 
  // {
  //   headers: { 
  //     'Accept': 'application/vnd.github+json',
  //     'Authorization': `token ${ACCESS_TOKEN}`
  //   },
  // });

  return response.data;
};

export { OWNER, REPO, issuesApi };