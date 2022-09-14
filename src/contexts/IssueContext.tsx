import { createContext, Dispatch, useReducer } from 'react';

export type Issue = {
  id: number;
  num: number;
  title: string;
  author: string;
  authorProfile: string;
  createdAt: string;
  commentNum: number;
  bodyContents: string;
};

type IssueListState = Issue[];
export const IssueListStateContext = createContext<IssueListState | undefined>(
  undefined
);

type Action = { type: 'STORE'; issue: Issue };

type IssueListDispatch = Dispatch<Action>;
export const IssueListDispatchContext = createContext<
  IssueListDispatch | undefined
>(undefined);

function issueListReducer(
  state: IssueListState,
  action: Action
): IssueListState {
  switch (action.type) {
    case 'STORE':
      return state.concat({
        ...action.issue,
      });
    default:
      throw new Error('Unhandled action');
  }
}

export function IssueListContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [issueList, dispatch] = useReducer(issueListReducer, []);

  return (
    <IssueListDispatchContext.Provider value={dispatch}>
      <IssueListStateContext.Provider value={issueList}>
        {children}
      </IssueListStateContext.Provider>
    </IssueListDispatchContext.Provider>
  );
}
