import axios from 'axios';

export const apiRoot = axios.create({
  method: 'get',
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': 'Basic ' + process.env.REACT_APP_API_KEY,
    'Content-type': 'application/vnd.github+json;',
  },
});

export const getIssueList = async (page: number) => {
  try {
    const { data } = await apiRoot(`/issues`, {
      params: { sort: 'comments', page: page },
    });

    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getIssue = async (issue_id: string | undefined) => {
  try {
    const { data } = await apiRoot(`/issues/${issue_id}`);

    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};
