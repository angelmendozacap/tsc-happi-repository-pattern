import { Pool, PoolConfig } from "pg";

const config: PoolConfig = {
  user: 'postgres',
  password: 'kick1930',
  database: 'react_go',
  host: 'localhost',
  port: 5432,
}

export const pool = new Pool(config)
