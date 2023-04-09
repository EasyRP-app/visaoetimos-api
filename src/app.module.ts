import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountPlansModule } from './modules/account-plans/account-plans.module';
import { AuthModule } from './modules/auth/auth.module';
// import { AuthModule } from './modules/auth/auth.module';
import { AppDataSource } from './db/data-source';
import { FinancesModule } from './modules/finances/finances.module';
import { SuppliersAndCustomersModule } from './modules/suppliers-and-customers/suppliers-and-customers.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'unlocked',
      // database: 'easyrpdb',
      // entities: ['**/modules/**/entities/*.js'],
      // synchronize: true,
      // logging: true,
      // type: 'postgres',
      // host: process.env.TYPEORM_HOST,
      // port: +process.env.TYPEORM_PORT,
      // username: process.env.TYPEORM_USERNAME,
      // password: process.env.TYPEORM_PASSWORD,
      // database: process.env.TYPEORM_DATABASE,
      // entities: [process.env.TYPEORM_ENTITIES],
      // synchronize: !!process.env.TYPEORM_SYNCHRONIZE,
      // logging: !!process.env.TYPEORM_LOGGING,
      // migrations: ['dist/**/migration/*.js'],
      // subscribers: ['dist/**/**.subscriber{.ts,.js}'],
      AppDataSource,
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot(),
    SuppliersAndCustomersModule,
    AccountPlansModule,
    FinancesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
