import {
  IPostData, IPostsWithUser, IUserData,
} from '../post/types';

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
