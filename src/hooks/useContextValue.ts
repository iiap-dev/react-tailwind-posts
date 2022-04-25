import { useContext } from 'react';
import { PostsContext } from '../@types/posts';
import { UsersContext } from '../@types/users';

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error(
      'usePostsContext must be used within a PostsProvider',
    );
  }

  return context;
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error(
      'useUsersContext must be used within a PostsProvider',
    );
  }

  return context;
};
