import axios from 'axios';

export const apiRoot = axios.create({
  method: 'get',
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    accpet: 'application/vnd.github+json',
    auth: process.env.REACT_APP_API_KEY,
  },
});

export const getOrganizationIssues = async () => {
  try {
    const { data } = await apiRoot(`repos/Angular/Angular-cli/issues`, {
      params: { sort: 'comments', per_page: 10 },
    });
    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};

export const getOrganization = async () => {
  try {
    const { data } = await apiRoot(`repos/Angular/Angular-cli`, {
      params: { sort: 'comments' },
    });
    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};
