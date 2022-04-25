import React from 'react';
import { IComment } from './types';
import { capitalize } from '../../utils';

interface ICommentsContentProps {
  comments: IComment[]
}

export const CommentsContent: React.FC<ICommentsContentProps> = ({ comments }) => (
  <>
    { comments.map(item => (
      <div className="mb-2.5 mx-[-20px] ">
        {/* eslint-disable-next-line max-len */}
        <div className="flex flex-row justify-between p-5 rounded-md min-h-[100px] shadow-card h-full mx-5">
          <div className="text-left">
            <div className="mb-2.5">{`${capitalize(item.name)}`}</div>
            <div>{`${capitalize(item.body)}`}</div>
          </div>
          <div className="mx-2.5">{`${item.email}`}</div>
        </div>
      </div>
    )) }
  </>
);
