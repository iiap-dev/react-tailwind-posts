// TODO add typing
async function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(((response) => response.json()));
}

async function getPost(postId: number): Promise<any> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(((response) => response.json()));
}

async function getPostComments(postId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((response) => response.json());
}

async function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json());
}

export const postsApi = {
  getPosts,
  getPost,
  getPostComments,
  getUsers,
};
