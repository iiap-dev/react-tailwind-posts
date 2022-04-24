import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IUserData, AppContextType, IPostData } from '../@types/app';
import { postsApi } from '../components/api';
import { formatPostsData } from '../utils';

// TODO refactor, make separate contexts
export function useAppContextValue(): AppContextType {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [posts, setPosts] = useState<IPostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const [usersData, postsData] = await Promise.all([
        postsApi.getUsers(),
        postsApi.getPosts(),
      ]);

      setUsers(usersData);
      setPosts(formatPostsData(postsData));
    }
    getData().finally(() => setIsLoading(false));
  }, [setUsers]);

  return useMemo(() => ({
    users,
    isLoading,
    posts,
  }), [users, isLoading, posts]);
}
