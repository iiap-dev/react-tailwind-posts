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

export const getUser = (
  postData: IPostData,
  users: IUserData[],
) => users.find(user => user.id === postData.userId);
