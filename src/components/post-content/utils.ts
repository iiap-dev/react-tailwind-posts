import { IPostData, IPostsWithUser, IUserData } from './types';
import { capitalize } from '../../utils';
import { IComment } from '../comments/types';

// TODO use reduce because of big array size
export const getPostsWithUserData = (
  posts: IPostData[],
  users: IUserData[],
): IPostsWithUser[] => posts.map(post => {
  const postCreator = users.find(user => user.id === post.userId);

  return ({
    ...post,
    user: {
      id: postCreator?.id ?? '',
      name: postCreator?.name ?? '',
      username: postCreator?.username ?? '',
      address: {
        city: postCreator?.address.city ?? '',
      },
      company: {
        name: postCreator?.company.name ?? '',
      },
    },
  });
});

export const getUserData = (
  userId: string,
  users: IUserData[],
) => users.find((user: IUserData) => user.id === userId);

export const formatPostData = (data: any) => ({
  ...data,
  name: capitalize(data.name),
  title: capitalize(data.title),
  body: capitalize(data.body),
});

// export const mapCommentsWithPost = (post: IPostData, comments: IComment[]): any =>
//   comments.reduce((acc, item) => post.id === item.postId ? [...acc, item] : acc, [])
//
// })

export const findPostComments = (
  post: IPostData,
  comments: IComment[],
): IComment[] => comments
  .reduce((acc: IComment[], item) => (item.postId === post.id ? [...acc, item] : acc), []);
