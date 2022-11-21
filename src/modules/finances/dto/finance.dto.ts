import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';

import { finaceStatusTypeEnum } from '../entities/enums/status.enum';

@ObjectType('Finances')
export class FinanceDTO extends BaseEntity {
  @FilterableField()
  issuedate: string;
  @FilterableField()
  paymentTerm: Date;
  @FilterableField()
  dueDate: Date;
  @FilterableField({ nullable: true })
  payDay?: Date;
  @FilterableField(() => finaceStatusTypeEnum)
  status: finaceStatusTypeEnum;
  @FilterableField()
  value: number;
  @Field({ nullable: true })
  comments?: string;
}
