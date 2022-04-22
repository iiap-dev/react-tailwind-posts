import React, { useEffect, useMemo, useState } from 'react';
import { Post } from './Post';
import { IPostContainerProps, IPostData, IUserData } from './types';
import { postsApi } from '../api';
import { getUserData, formatPostData } from './utils';

export const PostContainer: React.FC<IPostContainerProps> = ({ postId, isListView = false }) => {
  const [users, setUsers] = useState<IUserData[]>([{
    id: '',
    name: '',
    username: '',
    address: { city: '' },
    company: { name: '' },
  }]);
  const [postData, setPostData] = useState<IPostData>({
    title: '',
    body: '',
    userId: '',
    id: '',
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

  const user = useMemo(() => getUserData(postData.userId, users), [postData.userId]);

  return (
    <div className="flex flex-col p-5 bg-white w-full h-full mb-4 rounded-md">
      <Post
        key={`post-${postId}`}
        title={postData.title}
        content={postData.body}
        user={user ?? null}
        isListView={isListView}
      />
    </div>
  );
};
