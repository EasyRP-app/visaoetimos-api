import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      services: [UserService],
      resolvers: [
        {
          ServiceClass: UserService,
          EntityClass: User,
          DTOClass: UserDTO,
          CreateDTOClass: CreateUserInput,
          UpdateDTOClass: UpdateUserInput,
        },
      ],
    }),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
