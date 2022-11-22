import { registerEnumType } from '@nestjs/graphql';
import { AccountPlan } from '../account-plan.entity';

export enum costTypeEnum {
  INCOME = 'ENTRADA',
  OUTCOME = 'SAÍDA',
}

registerEnumType(costTypeEnum, {
  name: 'costTypeEnum',
});
