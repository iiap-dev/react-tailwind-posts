import React, {
  memo,
  useEffect,
  useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { formatPostsData, getAssociatedUser, getPostByUserId } from './utils';
import { usePostsContext, useUsersContext } from '../../hooks/useContextValue';
import { postsApi } from '../api';
import { Post } from './Post';
import { CommentsList } from '../comments/CommentsList';
import { SearchFilter } from '../seatch-filter/SearchFilter';
import { IGreeting } from '../types';
import { consoleGreeting } from '../utils';

interface IPostListProps extends IGreeting {}

export const PostsList: React.FC<IPostListProps> = memo(({ greeting }) => {
  const { state: { users, userIds } } = useUsersContext();
  const { state: { posts }, dispatch } = usePostsContext();

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

  consoleGreeting(greeting, 'PostsList');

  const user = getAssociatedUser(posts, users);
  const formattedPosts = useMemo(() => formatPostsData(posts), [posts]);
  const filteredPosts = useMemo(() => getPostByUserId(formattedPosts, userIds), [userIds]);

  const dataForMapping = filteredPosts.length === 1 ? filteredPosts[0] : formattedPosts;

  if (!posts || !users) return <div className="w-full h-full bg-amber-300 text-2xl p-2.5">Loading...</div>;

  return (
    <div className="flex flex-col w-full h-full">
      <SearchFilter key="posts-list-filter" greeting={greeting} />
      <div className="flex flex-col p-5 bg-purple">
        {dataForMapping?.map(post => (
          <div
            className="flex flex-col
              px-top bg-white
              rounded-md mb-2.5"
          >
            <Link to={`/post/${post.id}`}>
              <Post
                greeting={greeting}
                key={`post-${post.id}`}
                title={post.title}
                content={post.body}
                username={user[post.id].username}
                isListView
              />
            </Link>
            <CommentsList greeting={greeting} postId={post.id} isExpandableView key={`post-${post.id}-comments`} />
          </div>
        ))}
      </div>
    </div>
  );
});
