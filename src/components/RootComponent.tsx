import React, { useEffect } from 'react';
import {
  Route, Routes, useLocation, useMatch, useNavigate,
} from 'react-router-dom';
import { useUsersContext } from '../hooks/useContextValue';
import { postsApi } from './api';
import { PostPage } from './post-content/PostPage';
import { PostsList } from './post-content/PostsList';
import PostsProvider from '../context/postsContext';

export const RootComponent: React.FC = () => {
  const { state: { users }, dispatch } = useUsersContext();

  const navigate = useNavigate();
  const location = useLocation();
  const matchPostPage = useMatch('/post/:postId');

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
  }, []);

  if (!users) return <>Loading...</>;

  return (
    <div className="flex m-auto w-full md:w-4/5 sm:w-10/12">
      <Routes>
        <Route
          index
          element={(
            <PostsProvider>
              <PostsList />
            </PostsProvider>
        )}
        />
        <Route
          path="/posts"
          element={(
            <PostsProvider>
              <PostsList />
            </PostsProvider>
          )}
        />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </div>
  );
};
