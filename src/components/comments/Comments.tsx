import React, { memo, useEffect, useState } from 'react';
import { IComment } from './types';
import { postsApi } from '../api';
import { IPostData } from '../../@types/app';
import { findPostComments } from '../post-content/utils';

interface ICommentsProps {
  postId: string;
  postData: IPostData;
}

export const Comments: React.FC<ICommentsProps> = memo(({ postId, postData }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const data = await postsApi.getPostComments(postId);
      setComments(data);
    }
    fetchData().finally(() => setIsLoading(false));
  }, [postId, postData]);

  const test = findPostComments(postData, comments);

  if (isLoading) return <>Loading...</>;

  return (
    <>
      { test.map(item => (
        <div>
          {/* eslint-disable-next-line max-len */}
          <div className="flex flex-row justify-between p-5 mt-2.5 mx-[-20px] rounded-t-md min-h-[100px] shadow-card h-full">
            <div className="text-left">
              <div className="mb-2.5">{`${item.name}`}</div>
              <div>{`${item.body}`}</div>
            </div>
            <div className="mx-2.5">{`${item.email}`}</div>
          </div>
        </div>
      )) }
    </>

  );
});
