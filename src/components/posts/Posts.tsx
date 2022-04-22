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

import { useEffect, useState } from 'react';
import { postsApi } from '../api';
import { IPostData } from '../post/types';
import { PostContainer } from '../post/PostContainer';
import { Comments } from '../comments/Comments';

export const Posts = () => {
  const [postsList, setPostsList] = useState<IPostData[]>([]);

  useEffect(() => {
    async function getPostsList() {
      const posts = await postsApi.getPosts();

      setPostsList(posts);
    }
    getPostsList();
  }, []);

  return (
    <div className="flex flex-col p-5 bg-purple">
      {postsList.map(post => (
        <>
          <PostContainer postId={post.id} isListView={false} />
          <Comments />
        </>
      ))}
    </div>
  );
};
