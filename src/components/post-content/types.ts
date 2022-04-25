export interface IPostData {
  title: string;
  body: string;
  userId: string;
  id: string;
}

export interface IUserData {
  id: string;
  username: string;
}

export interface IPostProps {
  title: string;
  content: string;
  username: string;
  isListView?: boolean;
}
