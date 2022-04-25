import React, { memo, useEffect, useState } from 'react';
import { postsApi } from '../api';
import { IComment } from './types';
import { ExpandableComments } from './ExpandableComments';
import { CommentsContent } from './Comments';

interface CommentsListProps {
  postId: string;
  isExpandableView?: boolean;
}

export const CommentsList: React.FC<CommentsListProps> = memo(({ postId, isExpandableView = false }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function getCommentsData() {
      const data = await postsApi.getPostComments(postId);
      setComments(data);
    }
    getCommentsData().finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <>Loading...</>;

  return (
    <>
      { isExpandableView
        ? <ExpandableComments postId={postId} comments={comments} />
        : <CommentsContent comments={comments} />}
    </>
  );
});
