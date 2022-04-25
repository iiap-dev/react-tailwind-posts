import {
  InitialStateType, SetIsLoadingAction, SetUserIdsAction, SetUsersAction,
} from '../@types/users';
import { combineReducers } from './combineReducers';

export const initialState = {
  users: [],
  isLoading: false,
  userIds: [],
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

const setUserIds = (state: InitialStateType, action: SetUserIdsAction) => {
  switch (action.type) {
    case 'SET_USER_IDS': {
      return {
        ...state,
        userIds: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const usersReducer = combineReducers({ setUsers, setIsLoading, setUserIds });
