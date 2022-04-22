import { createContext } from 'react';

interface IAddress {
  city: string;
}

interface ICompany {
  name: string;
}

export interface IUserData {
  id: string;
  name: string;
  username: string;
  address: IAddress;
  company: ICompany;
}

export interface IPostData {
  title: string;
  body: string;
  userId: string;
  id: string;
}

export type AppContextType = {
  users: IUserData[],
  isLoading: boolean;
  posts: IPostData[];
};

export const AppContext = createContext<AppContextType>({
  users: [],
  isLoading: false,
  posts: [],
});
