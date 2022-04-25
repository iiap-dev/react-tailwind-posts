import { createContext } from 'react';
import { initialState } from '../reducers/usersReducer';

type UserType = {
  id: string;
  username: string;
}

export type InitialStateType = {
  users: UserType[];
  isLoading: boolean;
  userIds: string[];
}

export type SetUsersAction = {
  type: 'SET_USERS_ACTION',
  payload: UserType[]
}

export type SetIsLoadingAction = {
  type: 'SET_IS_LOADING',
  payload: boolean
}

export type SetUserIdsAction = {
  type: 'SET_USER_IDS',
  payload: string[]
}

// eslint-disable-next-line no-unused-vars
type Dispatch = (action: any) => void;

export const UsersContext = createContext(<{
  state: InitialStateType,
  dispatch: Dispatch,
}>({ state: initialState, dispatch: () => null }));
