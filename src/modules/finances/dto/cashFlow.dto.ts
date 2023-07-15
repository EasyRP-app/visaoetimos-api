import {
  FilterableField,
  FilterableRelation,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { AccountPlanDTO } from 'src/modules/account-plans/dto/account-plan.dto';

import { accountPlanTypeEnum } from 'src/modules/account-plans/entities/enums/account-plan.enum';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { FinanceDTO } from './finance.dto';

@ObjectType('CashFlowGroup')
export class CashFlowGroupDTO {
  @Field()
  type: string;

  @Field(() => [FinanceDTO])
  cashFlows: FinanceDTO[];
}
@ObjectType('CashFlow')
@FilterableRelation('accountplan', () => AccountPlanDTO, {
  nullable: true,
  pagingStrategy: PagingStrategies.NONE,
})
export class CashFlowDTO extends BaseDTO {
  @FilterableField()
  issuedate: Date;
  @FilterableField()
  paymentTerm: Date;
  @FilterableField()
  dueDate: Date;
  @FilterableField({ nullable: true })
  payDay?: Date;

  @FilterableField()
  value: number;
  @Field({ nullable: true })
  comments?: string;
  @Field({ nullable: true })
  accountPlanType?: accountPlanTypeEnum;
}
