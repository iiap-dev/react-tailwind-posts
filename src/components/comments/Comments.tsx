import React from 'react';
import { IComment } from './types';
import { capitalize } from '../utils';

interface ICommentsContentProps {
  comments: IComment[]
}

export const CommentsContent: React.FC<ICommentsContentProps> = ({ comments }) => (
  <>
    { comments.map(item => (
      <div className="mb-2.5 mx-[-20px]" key={`comment-${item.id}`}>
        {/* eslint-disable-next-line max-len */}
        <div className="flex flex-col lg:flex-row justify-between p-5 rounded-md min-h-[100px] shadow-card h-full mx-5 ">
          <div className="text-left">
            <div className="mb-2.5 font-semibold text-sm text-purple">{`${capitalize(item.name)}`}</div>
            <div className="mb-2.5 text-sm">{`${capitalize(item.body)}`}</div>
          </div>
        </div>
      </div>
    )) }
  </>
);
