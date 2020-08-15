import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import UserRepository from "../user/repository";
import DBPersistence from "../user/DBPersistence";

export class UserController {
  private _repository: UserRepository

  constructor() {
    this._repository = new UserRepository(new DBPersistence())
  }

  public async GetAll(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const users = await this._repository.GetAll()

    return h.response(users || {})
  }
}
