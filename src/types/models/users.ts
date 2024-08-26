export type CreateUserModel = {
  firstName: string;
  lastName: string;
  email: string;
};

export type UserModel = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  deleted?: boolean;
};
