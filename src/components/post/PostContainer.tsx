import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import { IPostContainerProps, IPostData, IUserData } from './types';
import { postsApi } from '../api';
import { getUserData, formatPostData } from './utils';

export const PostContainer: React.FC<IPostContainerProps> = ({ postId }) => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [postData, setPostData] = useState<IPostData>({
    title: '',
    name: '',
    body: '',
    userId: '',
  });

  useEffect(() => {
    async function getData() {
      const [usersData, post] = await Promise.all([
        postsApi.getUsers(),
        postsApi.getPost(postId),
      ]);

      setUsers(usersData);
      setPostData(formatPostData(post));
    }

    getData();
  }, []);

  const user = getUserData(postData.userId, users);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col p-5 bg-amber-50 w-full h-full">
      <Post title={postData.title} content={postData.body} user={user} />
    </div>
  );
};
