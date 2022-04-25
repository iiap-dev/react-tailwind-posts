import { IPostData, IUserData } from './types';

export const getAssociatedUser = (
  posts: IPostData[],
  users: IUserData[],
): any => posts.reduce((acc, post) => {
  const userData = users.find(user => user.id === post.userId);

  return {
    ...acc,
    [post.id]: {
      username: userData?.username,
    },
  };
}, {});
