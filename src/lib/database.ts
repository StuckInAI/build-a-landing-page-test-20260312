import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Subscriber } from '@/entities/Subscriber';
import path from 'path';
import fs from 'fs';

const dbPath = process.env.DATABASE_PATH || './data/database.sqlite';
const resolvedDbPath = path.resolve(process.cwd(), dbPath);

// Ensure data directory exists
const dataDir = path.dirname(resolvedDbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: resolvedDbPath,
    entities: [Subscriber],
    synchronize: true,
    logging: process.env.NODE_ENV === 'development',
  });

  await dataSource.initialize();
  return dataSource;
}
