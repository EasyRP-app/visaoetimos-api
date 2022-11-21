import { registerEnumType } from '@nestjs/graphql';

export enum finaceStatusTypeEnum {
  PAID = 'PAGO',
  OPEN = 'ABERTO',
}

registerEnumType(finaceStatusTypeEnum, {
  name: 'finaceStatusTypeEnum',
});
