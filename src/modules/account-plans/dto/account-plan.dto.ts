import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { FinanceDTO } from 'src/modules/finances/dto/finance.dto';
import { accountPlanTypeEnum } from '../entities/enums/account-plan.enum';
import { costTypeEnum } from '../entities/enums/costType.enum';

@ObjectType('CashFlowData')
export class CashFlowDataDTO {
  @Field()
  type: string;

  @Field(() => [AccountPlanDTO])
  cashFlows: AccountPlanDTO[];
}
@ObjectType('AccountPlan')
@FilterableOffsetConnection('finances', () => FinanceDTO, {
  nullable: true,
})
export class AccountPlanDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField(() => accountPlanTypeEnum)
  accountPlanType: accountPlanTypeEnum;

  @FilterableField(() => costTypeEnum)
  costType: costTypeEnum;
}
