export interface ILoginPost {
  username: string;
  email: string;
  password: string;
}

export interface ILoginRes {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}
