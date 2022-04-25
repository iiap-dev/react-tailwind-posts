import React, { useEffect } from 'react';
import { getAssociatedUser } from './utils';
import { usePostsContext, useUsersContext } from '../../hooks/useContextValue';
import { postsApi } from '../api';
import { Post } from './Post';
import { formatPostsData } from '../../utils';
import { CommentsList } from '../comments/CommentsList';

export const PostsList = () => {
  const { state: { users } } = useUsersContext();
  const { state: { posts, isLoading }, dispatch } = usePostsContext();

  useEffect(() => {
    dispatch({
      type: 'SET_IS_LOADING',
      payload: true,
    });

    async function getPostsList() {
      const list = await postsApi.getPosts();

      dispatch({
        type: 'SET_POSTS',
        payload: list,
      });
    }

    getPostsList().finally(() => {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: false,
      });
    });
  }, []);

  const user = getAssociatedUser(posts, users);
  const formattedPosts = formatPostsData(posts);

  if (isLoading) return <>Loading...</>;

  return (
    <div className="flex flex-col p-5 bg-purple">
      {formattedPosts?.map(post => (
        <div
          className="flex flex-col
              px-top bg-white w-full h-full
              rounded-md mb-2.5"
        >
          <Post
            key={`post-${post.id}`}
            title={post.title}
            content={post.body}
            username={user[post.id].username}
            isListView
          />
          <CommentsList postId={post.id} isExpandableView key={`post-${post.id}-comments`} />
        </div>
      ))}
    </div>
  );
};
