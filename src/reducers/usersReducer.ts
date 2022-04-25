import { InitialStateType, SetIsLoadingAction, SetUsersAction } from '../@types/users';
import { combineReducers } from './combineReducers';

export const initialState = {
  users: [],
  isLoading: false,
};

const setUsers = (state: InitialStateType, action: SetUsersAction) => {
  switch (action.type) {
    case 'SET_USERS_ACTION': {
      return {
        ...state,
        users: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const setIsLoading = (state: InitialStateType, action: SetIsLoadingAction) => {
  switch (action.type) {
    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const usersReducer = combineReducers({ setUsers, setIsLoading });
