import { IPostData, IUserData } from './post/types';

async function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response => response.json()));
}

async function getPost(postId: string): Promise<IPostData> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(data => data.json());
}

async function getPostComments(postId: string) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json());
}

async function getUsers(): Promise<IUserData[]> {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
}

export const postsApi = {
  getPosts,
  getPost,
  getPostComments,
  getUsers,
};
