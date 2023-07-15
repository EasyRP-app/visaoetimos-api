import { FilterableField } from '@nestjs-query/query-graphql';
import { ID, InterfaceType, ObjectType } from '@nestjs/graphql';

@InterfaceType()
@ObjectType('Base')
export abstract class BaseDTO {
  @FilterableField(() => ID)
  id?: string;

  @FilterableField({ nullable: true })
  createdAt?: Date;

  @FilterableField({ nullable: true })
  updatedAt?: Date;

  @FilterableField({ nullable: true })
  deletedAt?: Date;
}
