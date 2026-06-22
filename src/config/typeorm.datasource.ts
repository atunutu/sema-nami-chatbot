import 'dotenv/config';
import { DataSource } from 'typeorm';
import path from 'node:path';

const databaseUrl = process.env.DATABASE_URL?.trim();

export default new DataSource(
  databaseUrl
    ? {
        type: 'postgres',
        url: databaseUrl,
        ssl:
          process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
        entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
        migrations: ['src/database/migrations/*.ts'],
        synchronize: false,
      }
    : {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl:
          process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
        entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
        migrations: ['src/database/migrations/*.ts'],
        synchronize: false,
      },
);
