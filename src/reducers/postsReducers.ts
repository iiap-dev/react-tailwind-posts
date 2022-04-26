import {
  InitialStateType, SetActivePostId, SetIsLoading, SetPostsAction,
} from '../@types/posts';
import { combineReducers } from './combineReducers';

export const initialState = {
  posts: [],
  activePostId: '',
  isLoading: false,
};

const setPosts = (state: InitialStateType, action: SetPostsAction) => {
  switch (action.type) {
    case 'SET_POSTS': {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const setActivePostId = (state: InitialStateType, action: SetActivePostId) => {
  switch (action.type) {
    case 'SET_ACTIVE_POST_ID': {
      return {
        ...state,
        activePostId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const setIsLoading = (state: InitialStateType, action: SetIsLoading) => {
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

export const postsReducer = combineReducers({ setPosts, setIsLoading, setActivePostId });
