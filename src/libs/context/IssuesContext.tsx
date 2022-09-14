import { createContext, useReducer, useContext, Dispatch } from 'react';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState,
} from '../utils/asyncActionUtils';
import * as api from '../../apis';
import { Action } from 'history';

type State = {
  issues: any;
  issue: any;
};

const initialState = {
  issues: initialAsyncState,
  issue: initialAsyncState,
};

const issuesHandler = createAsyncHandler('GET_ISSUES', 'issues');
const issueHandler = createAsyncHandler('GET_ISSUE', 'issue');

function issuesReducer(state: any, action: any) {
  switch (action.type) {
    case 'GET_ISSUES':
    case 'GET_ISSUES_SUCCESS':
    case 'GET_ISSUES_ERROR':
      return issuesHandler(state, action);
    case 'GET_ISSUE':
    case 'GET_ISSUE_SUCCESS':
    case 'GET_ISSUE_ERROR':
      return issueHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const IssuesStateContext = createContext<State | null>(null);
const IssuesDispatchContext = createContext<Dispatch<Action> | null>(null);

export function IssuesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find IssuesProvider');
  }
  return state;
}

export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find IssuesProvider');
  }
  return dispatch;
}

export const getIssues = createAsyncDispatcher('GET_ISSUES', api.getIssues);
export const getIssue = createAsyncDispatcher('GET_ISSUE', api.getIssue);
