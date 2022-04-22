import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Post } from './Post';
import { IPostContainerProps, IPostData } from './types';
import { postsApi } from '../api';
import { formatPostData, getUserData } from './utils';
import { AppContext } from '../../@types/app';
import { Comments } from '../comments/Comments';

export const PostContainer: React.FC<IPostContainerProps> = ({
  postId,
  isListView = false,
  posts,
}) => {
  const { users } = useContext(AppContext);

  const [postData, setPostData] = useState<IPostData>({
    title: '',
    body: '',
    userId: '',
    id: '',
  });

  useEffect(() => {
    async function getData() {
      if (postId) {
        const post = await postsApi.getPost(postId);
        setPostData(formatPostData(post));
      }
    }
    getData();
  }, [postId]);

  const user = useMemo(() => getUserData(postData.userId, users), [postData.userId, users]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { postId ? (
        <div className="flex flex-col m-auto">
          <div className="flex flex-col p-5 bg-white w-full h-full rounded-md m-2.5">
            <Post
              key={`post-${postId}`}
              title={postData.title}
              content={postData.body}
              user={user ?? null}
            />
          </div>
          <Comments />
        </div>
      ) : (
        posts?.map(post => (
          <div className="flex flex-col p-5 bg-white w-full h-full rounded-md mb-2.5">
            <Post
              key={`post-${postId}`}
              title={post.title}
              content={post.body}
              user={post.user}
              isListView={isListView}
            />
            <Comments />
          </div>
        ))
      ) }
    </>
  );
};
