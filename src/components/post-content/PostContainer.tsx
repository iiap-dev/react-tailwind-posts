import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { AppContext } from '../../@types/app';

import { postsApi } from '../api';

import { IPostContainerProps, IPostData } from './types';
import { formatPostData, getUserData } from './utils';
import { Post } from './Post';
import { Comments } from '../comments/Comments';

export const PostContainer: React.FC<IPostContainerProps> = ({
  postId,
  isListView = false,
  posts,
}) => {
  const { users } = useContext(AppContext);

  const [isShowMore, setIsShowMore] = useState<boolean>(false);

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

  const user = useMemo(() => getUserData(postData.userId, users), [postData.userId]);

  return (
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
        </div>
      ) : (
        posts?.map(post => (
          <>
            <div
              className="flex flex-col
              px-top bg-white w-full h-full
              rounded-md mb-2.5"
            >
              <Post
                key={`post-${post.id}`}
                title={post.title}
                content={post.body}
                user={post.user}
                isListView={isListView}
              />
              Comments (5)
              <div
                key={`post-${post.id}-comments`}
                className={isShowMore ? '' : 'min-h-[150px] h-[250px] overflow-hidden'}
              >
                <Comments postId={post.id} postData={post} />
              </div>
              { !isShowMore && <div className="relative mt-[-100px] h-[100px] bg-gradient-to-b from-white/0 to-white" /> }
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div
                className="my-2.5 cursor-pointer"
                onClick={() => setIsShowMore(!isShowMore)}
              >
                show more
              </div>
            </div>
          </>
        ))
      ) }
    </>
  );
};
