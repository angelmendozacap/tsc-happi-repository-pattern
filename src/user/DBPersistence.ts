import UserPersistence from "./persistence";
import User from "./model";
import { pool } from "../db";
import { QueryResult } from "pg";

export default class DBPersistence implements UserPersistence {
  async GetAll(): Promise<User[]> {
    const result: QueryResult = await pool.query('SELECT id, name, email, created_at, updated_at FROM users')

    return result.rows
  }
}
