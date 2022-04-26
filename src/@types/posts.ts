import { createContext } from 'react';
import { initialState } from '../reducers/postsReducers';

type PostType = {
  title: string;
  body: string;
  userId: string;
  id: string;
}

export type InitialStateType = {
  posts: PostType[];
  activePostId: string;
  isLoading: boolean;
}

// eslint-disable-next-line no-unused-vars
type Dispatch = (action: any) => void;

export const PostsContext = createContext<{
  state: InitialStateType,
  dispatch: Dispatch
}>({ state: initialState, dispatch: () => null });

export type SetPostsAction = {
  type: 'SET_POSTS',
  payload: PostType[]
}

export type SetActivePostId = {
  type: 'SET_ACTIVE_POST_ID',
  payload: string
}

export type SetIsLoading = {
  type: 'SET_IS_LOADING',
  payload: boolean
}
