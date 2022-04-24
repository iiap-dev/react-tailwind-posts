import React, { useContext } from 'react';
import { AppContext } from '../../@types/app';
import { getPostsWithUserData } from './utils';
import { PostContainer } from './PostContainer';

export const Posts = () => {
  const { posts, users, isLoading } = useContext(AppContext);

  if (isLoading) return <div>Loading...</div>;

  const postsWithUserData = getPostsWithUserData(posts, users);

  return (
    <div className="flex flex-col p-5 bg-purple">
      <PostContainer posts={postsWithUserData} isListView />
    </div>
  );
};
