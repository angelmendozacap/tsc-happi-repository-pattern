import User from "./model";

export default interface UserPersistence {
  GetAll(): Promise<User[]>
}
