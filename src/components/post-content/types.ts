import { IGreeting } from '../types';

export interface IPostData {
  title: string;
  body: string;
  userId: string;
  id: string;
}

export interface IUserData {
  id: string;
  username: string;
  name: string;
}

export interface IPostProps extends IGreeting{
  title: string;
  content: string;
  username: string;
  isListView?: boolean;
}
