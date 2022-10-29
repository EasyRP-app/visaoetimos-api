import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { FilterableField } from '@nestjs-query/query-graphql';
@ObjectType('SuppliersAndCustomer')
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
