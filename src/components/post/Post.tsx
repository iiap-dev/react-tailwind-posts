import React, { memo } from 'react';
import { IPostProps } from './types';

export const Post: React.FC<IPostProps> = memo(({ title, content, user }) => {
  const { username } = user;

  return (
    <>
      <div className="flex justify-between border-b pb-5">
        <div className="text-base font-medium">{title}</div>
        <div className="text-base text-slate-400">{`@${username}`}</div>
      </div>
      <div className="flex justify-start py-5 border-b text-justify">
        <div>{content}</div>
      </div>
    </>
  );
});
