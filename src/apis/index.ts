import axios from 'axios';

const apiRoot = axios.create({
  method: 'get',
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: 'token ' + process.env.REACT_APP_API_KEY },
  params: { state: 'open', sort: 'comments', direction: 'desc' },
});

export const getIssues = async (pageNumber: number) => {
  const response = await apiRoot('/issues', { params: { page: pageNumber } });
  return response.data;
};

export const getIssue = async (id: number) => {
  const response = await apiRoot(`issues${id}`);
  return response.data;
};
