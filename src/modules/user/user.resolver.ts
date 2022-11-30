import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserDTO)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.userService.createUser(data);
  }

  // @Query(() => User)
  // async user(@Args('id') id: string): Promise<User> {
  //   return this.userService.getUserById(id);
  // }

  // @Query(() => [User])
  // async users(): Promise<User[]> {
  //   return await this.userService.findAllUsers();
  // }

  @Mutation(() => UserDTO)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser({ id, ...data });
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string): Promise<true> {
    await this.userService.deleteUser(id);
    return true;
  }
  @Query(() => UserDTO)
  async userByEmail(@Args('email') email: string): Promise<User> {
    return this.userService.getUserByEmail(email);
  }
}
