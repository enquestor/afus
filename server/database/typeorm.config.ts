import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import afusConfig from '../src/afus.config';
import { Short } from '../src/short/short.entity';
import { CreateShort1680773132400 } from './migrations';

config();
const acfg = afusConfig();

export default new DataSource({
  type: 'postgres',
  host: acfg.POSTGRES_HOST,
  port: parseInt(acfg.POSTGRES_PORT),
  username: acfg.POSTGRES_USER,
  password: acfg.POSTGRES_PASSWORD,
  database: acfg.POSTGRES_DB,
  entities: [Short],
  migrations: [CreateShort1680773132400],
});
