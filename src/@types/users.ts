import { createContext } from 'react';
import { initialState } from '../reducers/usersReducer';

type UserType = {
  id: string;
  username: string;
}

export type InitialStateType = {
  users: UserType[];
  isLoading: boolean;
}

export type SetUsersAction = {
  type: 'SET_USERS_ACTION',
  payload: UserType[]
}

export type SetIsLoadingAction = {
  type: 'SET_IS_LOADING',
  payload: boolean
}

// eslint-disable-next-line no-unused-vars
type Dispatch = (action: SetUsersAction | SetIsLoadingAction) => void;

export const UsersContext = createContext(<{
  state: InitialStateType,
  dispatch: Dispatch,
}>({ state: initialState, dispatch: () => null }));
