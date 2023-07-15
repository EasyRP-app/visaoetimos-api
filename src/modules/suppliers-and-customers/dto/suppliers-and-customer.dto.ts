import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { FinanceDTO } from 'src/modules/finances/dto/finance.dto';
@ObjectType('SuppliersAndCustomer')
@FilterableOffsetConnection('finances', () => FinanceDTO, {
  nullable: true,
})
export class SuppliersAndCustomerDTO extends BaseDTO {
  @FilterableField({ nullable: true })
  name?: string;

  @FilterableField()
  cpf: string;

  @FilterableField({ nullable: true })
  email?: string;

  @FilterableField()
  phone: string;

  @FilterableField()
  address: string;
}
