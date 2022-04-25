import { IPostData } from './components/post-content/types';

export const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

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

export const getPostByUserId = (
  posts: IPostData[],
  usersIds: string[],
) => usersIds.map(id => posts.filter(post => post.userId === id));
