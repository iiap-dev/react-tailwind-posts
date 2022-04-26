import { IPostData, IUserData } from './types';
import { capitalize } from '../utils';

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

export const formatPostsData = (
  posts: IPostData[],
) => posts.map(item => {
  const { title, body } = item;
  return ({
    ...item,
    title: capitalize(title),
    body: capitalize(body),
  });
});

export const formatPostData = (postData: IPostData) => ({
  ...postData,
  title: capitalize(postData.title),
  body: capitalize(postData.body),
});

export const getPostByUserId = (
  posts: IPostData[],
  usersIds: string[],
) => usersIds.map(id => posts.filter(post => post.userId === id));
