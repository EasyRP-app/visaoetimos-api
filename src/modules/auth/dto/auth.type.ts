import { Field, ObjectType } from '@nestjs/graphql';
import { UserDTO } from 'src/modules/users/dto/user.dto';
import { User } from 'src/modules/users/entities/user.entity';

@ObjectType('Auth')
export class AuthType {
  @Field(() => UserDTO)
  user: User;

  @Field()
  token: string;
}

@ObjectType()
export class TokenValidType {
  @Field()
  valid: boolean;
}
