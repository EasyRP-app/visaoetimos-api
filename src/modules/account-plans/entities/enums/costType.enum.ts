import { registerEnumType } from '@nestjs/graphql';

export enum costTypeEnum {
  INCOME = 'ENTRADA',
  OUTCOME = 'SAÍDA',
}

registerEnumType(costTypeEnum, {
  name: 'costTypeEnum',
});
