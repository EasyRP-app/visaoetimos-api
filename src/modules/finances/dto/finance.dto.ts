import {
  FilterableField,
  FilterableOffsetConnection,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType, Field } from '@nestjs/graphql';
import { AccountPlanDTO } from 'src/modules/account-plans/dto/account-plan.dto';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';

import { finaceStatusTypeEnum } from '../entities/enums/status.enum';

@ObjectType('Finances')
@FilterableRelation('accountplan', () => AccountPlanDTO, {
  nullable: true,
})
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
