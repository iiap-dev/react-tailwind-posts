import React, { memo } from 'react';
import { IPostProps } from './types';

export const Post: React.FC<IPostProps> = memo(({
  title,
  content,
  user,
  isListView = false,
}) => (
  <>
    <div className={isListView ? 'post-header' : 'post-header-bordered'}>
      <div className="text-base font-medium text-left">{title}</div>
      <div className="text-base text-purple/50">{`@${user?.username}`}</div>
    </div>
    <div className="flex justify-start py-5 border-b text-justify border-b-purple/50">
      <div>{content}</div>
    </div>
  </>
));