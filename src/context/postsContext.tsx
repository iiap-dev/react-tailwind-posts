import React, {
  ReactNode, useMemo, useReducer,
} from 'react';
import { PostsContext } from '../@types/posts';
import { initialState, postsReducer } from '../reducers/postsReducers';

const PostsProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
