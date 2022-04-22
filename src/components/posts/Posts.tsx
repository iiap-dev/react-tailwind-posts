/*
* const postWithUser = getPostWithUser(posts, users)
*
* const getPostWithUser = (posts, users) =>
*
* posts.map(post => {
* const user = getUserData(post.userId, users);
*
* return ([
* ...post,
* user,
* ])
* })
*
*
*
* postWithUser.map(post =>
* <Post title={post.title} content={post.body} user={post.user}/>)
* */

import React, { useContext } from 'react';
import { PostContainer } from '../post/PostContainer';
import { AppContext } from '../../@types/app';
import { getPostsWithUserData } from './utils';

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
