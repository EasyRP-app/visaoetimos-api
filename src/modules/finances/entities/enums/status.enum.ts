import { registerEnumType } from '@nestjs/graphql';
import { Finance } from '../finance.entity';

export enum finaceStatusTypeEnum {
  PAID = 'PAGO',
  OPEN = 'ABERTO',
}

registerEnumType(finaceStatusTypeEnum, {
  name: 'finaceStatusTypeEnum',
});
