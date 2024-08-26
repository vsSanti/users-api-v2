import { CreateUserModel, UserModel } from "../types/models";

class UsersStorage {
  private usersMap: Map<string, UserModel>;

  constructor() {
    this.usersMap = new Map();

    this.usersMap.set("1234", {
      id: "1234",
      firstName: "Mock",
      lastName: "Data",
      email: "mockdata@email.com",
    });
  }

  async create(userBody: CreateUserModel) {
    const id = Math.ceil(Math.random() * 10000) + "";

    const user = {
      ...userBody,
      id,
    };

    this.usersMap.set(id, user);

    return user;
  }

  async findAll() {
    const users = [...this.usersMap.values()];
    console.log(
      "ASDAS",
      users.filter((user: UserModel) => !user.deleted)
    );
    return users.filter((user: UserModel) => !user.deleted);
  }

  async findById(id: string) {
    const user = this.usersMap.get(id);
    return user?.deleted ? null : user;
  }

  async update(id: string, updates: CreateUserModel) {
    const user = this.usersMap.get(id);

    if (!user) {
      throw Error("User not found");
    }

    const updatedUser = {
      ...user,
      ...updates,
      id,
    };

    this.usersMap.set(user.id, updatedUser);

    return updatedUser;
  }

  async delete(id: string) {
    const user = this.usersMap.get(id);

    if (!user) {
      throw Error("User not found");
    }

    this.usersMap.set(user.id, { ...user, deleted: true });

    return user;
  }
}

export default UsersStorage;
