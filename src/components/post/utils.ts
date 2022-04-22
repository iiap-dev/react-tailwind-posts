import { IPostData, IUserData } from './types';

export const getUserData = (
  userId: string,
  users: IUserData[] | null,
) => users?.find((user: IUserData) => user.id === userId);

export const formatPostData = (post: IPostData) => {
  const { title, body } = post;

  return ({
    ...post,
    title: title[0].toUpperCase() + title.slice(1),
    body: body[0].toUpperCase() + body.slice(1),
  });
};
