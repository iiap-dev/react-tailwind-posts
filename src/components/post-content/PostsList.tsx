import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAssociatedUser } from './utils';
import { usePostsContext, useUsersContext } from '../../hooks/useContextValue';
import { postsApi } from '../api';
import { Post } from './Post';
import { formatPostsData, getPostByUserId } from '../../utils';
import { CommentsList } from '../comments/CommentsList';
import { SearchFilter } from '../seatch-filter/SearchFilter';

export const PostsList = () => {
  const { state: { users, userIds } } = useUsersContext();
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
  const formattedPosts = useMemo(() => formatPostsData(posts), [posts]);
  const filteredPosts = useMemo(() => getPostByUserId(formattedPosts, userIds), [userIds, formattedPosts]);

  const dataForMapping = filteredPosts.length === 1 ? filteredPosts[0] : formattedPosts;

  if (isLoading) return <>Loading...</>;

  // TODO wrap CommentsList with provider
  return (
    <div className="flex flex-col w-full h-full">
      <SearchFilter key="posts-list-filter" />
      <div className="flex flex-col p-5 bg-purple">
        {dataForMapping?.map(post => (
          <div
            className="flex flex-col
              px-top bg-white
              rounded-md mb-2.5"
          >
            <Link to={`/post/${post.id}`}>
              <Post
                key={`post-${post.id}`}
                title={post.title}
                content={post.body}
                username={user[post.id].username}
                isListView
              />
            </Link>
            <CommentsList postId={post.id} isExpandableView key={`post-${post.id}-comments`} />
          </div>
        ))}
      </div>
    </div>

  );
};
