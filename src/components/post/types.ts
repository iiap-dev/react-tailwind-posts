export interface IPostData {
  title: string;
  body: string;
  name: string;
  userId: string;
}

export interface IAddress {
  city: string;
}

export interface ICompany {
  name: string;
}

export interface IUserData {
  id: string;
  name: string;
  username: string;
  address: IAddress;
  company: ICompany;
}

export interface IPostProps {
  title: string;
  content: string;
  user: IUserData;
}

export interface IPostContainerProps {
  postId: string
}
