module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  // entities: [process.env.TYPEORM_ENTITIES],
  synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
  logging: !!process.env.TYPEORM_LOGGING,
  cli: {
    migrationsDir: 'src/common/migration/',
  },

  //logging: true,
};
