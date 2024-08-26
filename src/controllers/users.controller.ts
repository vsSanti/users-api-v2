import UsersStorage from "../storage/users.storage";
import { Controller, HttpRequest } from "../types/modules";

export default class UsersController {
  private userStorage: UsersStorage;

  constructor(userStorage: UsersStorage) {
    this.userStorage = userStorage;
  }

  create: Controller = async ({ body }: HttpRequest) => {
    const user = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    };

    const createdUser = await this.userStorage.create(user);

    return {
      statusCode: 201,
      body: createdUser,
    };
  };

  getAll: Controller = async () => {
    const usersMap = await this.userStorage.findAll();

    //const users = Array.from(usersMap, ([name, value]) => ({ name, value }));

    return {
      statusCode: 200,
      body: usersMap,
    };
  };

  getById: Controller = async ({ params }: HttpRequest) => {
    const user = await this.userStorage.findById(params.id);

    if (!user) {
      return {
        statusCode: 404,
        body: { message: "User not found" },
      };
    }

    return {
      statusCode: 200,
      body: user,
    };
  };

  update: Controller = async ({ params, body }: HttpRequest) => {
    const userId = params.id;

    const userUpdates = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    };

    const updatedUser = await this.userStorage.update(userId, userUpdates);

    console.log("updatedUser", updatedUser);

    return {
      statusCode: 200,
      body: updatedUser,
    };
  };

  delete: Controller = async ({ params }) => {
    const userId = params.id;

    const deletedUser = this.userStorage.delete(userId);

    return {
      statusCode: 200,
      body: deletedUser,
    };
  };
}
