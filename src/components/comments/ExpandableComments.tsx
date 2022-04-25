import React, { memo, useState } from 'react';
import { IComment } from './types';
import { CommentsContent } from './Comments';

interface IExpandableCommentsProps {
  postId: string,
  comments: IComment[]
}

export const ExpandableComments: React.FC<IExpandableCommentsProps> = memo(({ postId, comments }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  return (
    <>
      { !isShowMore && <div className="my-2.5">Comments</div> }
      <div>
        { isShowMore && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className="my-2.5 cursor-pointer" onClick={() => setIsShowMore(!isShowMore)}>
          Hide
        </div>
        ) }
      </div>
      <div
        key={`post-${postId}-comments`}
        className={isShowMore ? '' : 'min-h-[150px] h-[250px] overflow-hidden'}
      >
        <CommentsContent comments={comments} />
      </div>
      {!isShowMore && <div className="relative mt-[-100px] h-[100px] bg-gradient-to-b from-white/0 to-white" /> }
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className="my-2.5 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? 'Hide' : 'Show more' }
      </div>
    </>
  );
});
