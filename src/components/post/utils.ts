import { IPostData, IUserData } from './types';
import { capitalize } from '../../utils';

export const getUserData = (
  userId: string,
  users: IUserData[],
) => users.find((user: IUserData) => user.id === userId);

export const formatPostData = (post: IPostData) => ({
  ...post,
  title: capitalize(post.title),
  body: capitalize(post.body),
});
