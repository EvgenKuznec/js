import { Pool } from 'pg';
import dotenv from 'dotenv'

dotenv.config();

export default class Database {
  private pool: Pool;

  constructor() {
    const portSql = +(process.env.PORT_SQL || '5432');

    this.pool = new Pool({
      user: process.env.USER_SQL,
      host: process.env.HOST_SQL,
      database: process.env.NAME_SQL,
      password: process.env.PASSWORD_SQL,
      port: portSql,
    });
  }

  async query(queryString: string, params?: any[]): Promise<any[]> {
    try {
      const client = await this.pool.connect();
      const result = await client.query(queryString, params);
      client.release();
      return result.rows;
    } catch (error) {
      console.error('Error executing query', error);
      throw error;
    }
  }

  close(): void {
    this.pool.end();
  }
}
