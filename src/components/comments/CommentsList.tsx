import React, {
  useEffect,
  useState,
} from 'react';
import { postsApi } from '../api';
import { IComment } from './types';
import { ExpandableComments } from './ExpandableComments';
import { CommentsContent } from './Comments';
import { IGreeting } from '../types';
import { consoleGreeting } from '../utils';

interface CommentsListProps extends IGreeting {
  postId: string;
  // eslint-disable-next-line react/require-default-props
  isExpandableView?: boolean;
}

export const CommentsList: React.FC<CommentsListProps> = ({ postId, isExpandableView = false, greeting }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    async function getCommentsData() {
      const data = await postsApi.getPostComments(postId);
      setComments(data);
    }
    getCommentsData();
  }, []);

  consoleGreeting(greeting, 'CommentsList');

  return (
    <>
      { isExpandableView
        ? <ExpandableComments postId={postId} comments={comments} />
        : <CommentsContent comments={comments} />}
    </>
  );
};
