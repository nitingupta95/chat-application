export type RegisterType = {
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export interface UserType {
  _id: string;
  name: string;
  email: string;
  avatar?: string | null;
  isAI?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
