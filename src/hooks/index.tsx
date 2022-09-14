import { useContext } from 'react';
import {
  IssueListDispatchContext,
  IssueListStateContext,
} from '../contexts/IssueContext';

export function useIssueListState() {
  const state = useContext(IssueListStateContext);
  if (!state) throw new Error('IssueListProvider not found');
  return state;
}

export function useIssueListDispatch() {
  const dispatch = useContext(IssueListDispatchContext);
  if (!dispatch) throw new Error('IssueListProvider not found');
  return dispatch;
}
