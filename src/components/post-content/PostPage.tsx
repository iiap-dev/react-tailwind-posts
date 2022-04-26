import { Link, useParams } from 'react-router-dom';
import {
  memo,
  useContext, useEffect, useState,
} from 'react';
import { IPostData } from './types';
import { postsApi } from '../api';
import { UsersContext } from '../../@types/users';
import { getUser } from './utils';
import { formatPostData } from '../../utils';
import { Post } from './Post';
import { CommentsList } from '../comments/CommentsList';

export const PostPage = memo(() => {
  const { state: { users } } = useContext(UsersContext);
  const [postData, setPostData] = useState<IPostData>({
    title: '',
    body: '',
    userId: '',
    id: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { postId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function getPost() {
      const post = await postsApi.getPost(postId ?? '');

      const formattedPost = formatPostData(post);
      setPostData(formattedPost);
    }
    getPost().finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <>Loading...</>;

  const user = getUser(postData, users);

  return (
    <div className="flex flex-col
    px-top bg-white w-full h-full
    rounded-md my-2.5"
    >
      <Link to="/posts" replace>
        <div className="bg-crane-red/50 p-2.5 mx-[-20px] mt-[-20px] mb-2.5 text-white">Back to the list</div>
      </Link>
      <Post title={postData.title} content={postData.body} username={user?.username ?? ''} />
      <CommentsList postId={postId ?? ''} />
    </div>
  );
});
