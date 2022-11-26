import { registerEnumType } from '@nestjs/graphql';

export enum accountPlanTypeEnum {
  FIXED = 'FIXO',
  VARIABLE = 'VARIÁVEL',
}

registerEnumType(accountPlanTypeEnum, {
  name: 'accountPlanTypeEnum',
});
