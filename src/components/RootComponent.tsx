import React, { memo, useEffect } from 'react';
import {
  Route, Routes, useLocation, useMatch, useNavigate,
} from 'react-router-dom';
import { useUsersContext } from '../hooks/useContextValue';
import { postsApi } from './api';
import { PostPage } from './post-content/PostPage';
import { PostsList } from './post-content/PostsList';
import PostsProvider from '../context/postsContext';
import { consoleGreeting } from './utils';
import { IGreeting } from './types';

interface IRootComponent extends IGreeting {}

export const RootComponent: React.FC<IRootComponent> = memo(({ greeting }) => {
  const { state: { users }, dispatch } = useUsersContext();

  const navigate = useNavigate();
  const location = useLocation();
  const matchPostPage = useMatch('/post/:postId');

  // TODO add fallback page
  useEffect(() => {
    navigate(matchPostPage?.pathname ?? '');
  }, [matchPostPage]);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/posts');
    }
  }, [location]);

  useEffect(() => {
    async function getData() {
      const data = await postsApi.getUsers();

      dispatch({
        type: 'SET_USERS_ACTION',
        payload: data,
      });
    }
    getData();
    consoleGreeting(greeting, 'RootComponent');
  }, []);

  if (!users) return null;

  return (
    <div className="flex m-auto w-full md:w-4/5">
      <Routes>
        <Route
          index
          element={(
            <PostsProvider>
              <PostsList greeting={greeting} />
            </PostsProvider>
        )}
        />
        <Route
          path="/posts"
          element={(
            <PostsProvider>
              <PostsList greeting={greeting} />
            </PostsProvider>
          )}
        />
        <Route path="/post/:postId" element={<PostPage greeting={greeting} />} />
      </Routes>
    </div>
  );
});
