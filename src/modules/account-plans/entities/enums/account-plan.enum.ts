import { registerEnumType } from '@nestjs/graphql';
import { AccountPlan } from '../account-plan.entity';

export enum accountPlanTypeEnum {
  FIXED = 'FIXO',
  VARIABLE = 'VARIÁVEL',
}

registerEnumType(accountPlanTypeEnum, {
  name: 'accountPlanTypeEnum',
});
