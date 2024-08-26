class UsersStorage {
  usersMap: Map<any, any>;

  constructor() {
    this.usersMap = new Map();

    this.usersMap.set("1234", {
      id: "1234",
      firstName: "Mock",
      lastName: "Data",
      email: "mockdata@email.com",
    });
  }
}

export default new UsersStorage();
