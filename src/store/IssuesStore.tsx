import { createContext, useState } from 'react';
import { OWNER, REPO, issuesApi, totalIssuesApi, singleIssueApi } from '../apis/index';

interface issueGuard {
  [key: string]: any
};

interface storeGuard {
  owner: string;
  repo: string;
  issueLists: issueGuard[];
  scrollLists: (page: number) => Promise<null | void>;
  setIssueLists: React.Dispatch<React.SetStateAction<issueGuard[]>>;
  totalIssuesApi: () => Promise<any>;
  singleIssueApi: (issue_number: string | undefined) => Promise<any>;
  get: () => any;
  set: (value: any) => void;
};

export const IssuesContext = createContext<storeGuard | null>(null);

export default function IssuesStore(props: { children: any}) {
  const [issueLists, setIssueLists] = useState<issueGuard[]>([]);
  const owner = OWNER, repo = REPO, callApi = issuesApi;
  
  const bridge = {
    owner,
    repo,
    issueLists,
    scrollLists: async (page: number) => {
      const addLists = await callApi(page);
      setIssueLists([ ...issueLists, ...addLists ]);
    },
    setIssueLists,
    totalIssuesApi,
    singleIssueApi,

    get: () => {
      const result = JSON.parse(sessionStorage.getItem('issue_lists') || '[]');
      return result;
    },
    set: (value: any) => sessionStorage.setItem('issue_lists', JSON.stringify(value))
  };

  return (
    <IssuesContext.Provider value={ bridge }>{ props.children }</IssuesContext.Provider>
  );
};