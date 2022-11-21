import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { accountPlanTypeEnum } from '../entities/enums/account-plan.enum';
import { costTypeEnum } from '../entities/enums/costType.enum';

@ObjectType('AccountPlan')
export class AccountPlanDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField(() => accountPlanTypeEnum)
  accountPlanType: accountPlanTypeEnum;

  @FilterableField(() => costTypeEnum)
  costType: costTypeEnum;
}
