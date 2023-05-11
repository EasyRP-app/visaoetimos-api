import { DataSource, DataSourceOptions } from 'typeorm';

export const AppDataSource: DataSourceOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  // entities: [process.env.TYPEORM_ENTITIES],
  synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
  logging: !!process.env.TYPEORM_LOGGING,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/**/migration/*.js'],
  subscribers: ['dist/**/**.subscriber{.ts,.js}'],
};
const dataSource = new DataSource(AppDataSource);
export default dataSource;
