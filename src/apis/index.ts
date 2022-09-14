import axios from 'axios';

export const api = axios.create({
  method: 'get',
  baseURL: process.env.REACT_APP_API_URL,
});

const config = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_API_KEY}`,
  },
};

export const GetIssues = async () => {
  try {
    const response = await api('/issues', config);
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const GetIssue = async (issueNumber: number) => {
  try {
    const response = await api(`/issues/${issueNumber}`, config);
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};
