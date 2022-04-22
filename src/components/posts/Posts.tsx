/*
* const postWithUser = getPostWithUser(posts, users)
*
* const getPostWithUser = (posts, users) =>
*
* posts.map(post => {
* const user = getUserData(post.userId, users);
*
* return ([
* ...post,
* user,
* ])
* })
*
*
*
* postWithUser.map(post =>
* <Post title={post.title} content={post.body} user={post.user}/>)
* */

export const Posts = () => (
  <div>Posts</div>
);
