import React, { createContext } from 'react';
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

export const PostsContext = createContext<{
  state: InitialStateType,
  dispatch: React.Dispatch<any>
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
