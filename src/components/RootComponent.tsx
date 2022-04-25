import React, { useEffect } from 'react';
import { useUsersContext } from '../hooks/useContextValue';
import { postsApi } from './api';
import PostsProvider from '../context/postsContext';
import { PostsList } from './post-content/PostsList';

export const RootComponent: React.FC = () => {
  const { state: { isLoading }, dispatch } = useUsersContext();

  useEffect(() => {
    dispatch({
      type: 'SET_IS_LOADING',
      payload: true,
    });

    async function getData() {
      const data = await postsApi.getUsers();

      dispatch({
        type: 'SET_USERS_ACTION',
        payload: data,
      });
    }

    getData().finally(() => dispatch({
      type: 'SET_IS_LOADING',
      payload: false,
    }));
  }, []);

  if (isLoading) return <>Loading...</>;

  return (
    <div className="flex m-auto w-full md:w-4/5 sm:w-10/12">
      <PostsProvider>
        <PostsList />
      </PostsProvider>
      {/* { activePostId && ( */}
      {/*  <PostPage /> */}
      {/* ) } */}
    </div>
  );
};
