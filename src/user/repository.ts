import UserPersistence from "./persistence";
import User from "./model";

export default class UserRepository {

  constructor(private _persistence: UserPersistence) {}

  async GetAll(): Promise<User[]> {
    try {
      let users = await this._persistence.GetAll()

      return users
    } catch (err) {
      throw new Error('error al leer los usuarios');
    }
  }
}
