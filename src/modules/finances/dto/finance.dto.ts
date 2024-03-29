import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { AccountPlanDTO } from 'src/modules/account-plans/dto/account-plan.dto';
import { SuppliersAndCustomerDTO } from 'src/modules/suppliers-and-customers/dto/suppliers-and-customer.dto';

import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { finaceStatusTypeEnum } from '../entities/enums/status.enum';

@ObjectType('Finances')
@FilterableRelation('accountplan', () => AccountPlanDTO, {
  nullable: true,
})
@FilterableRelation('supplierAndCustomer', () => SuppliersAndCustomerDTO, {
  nullable: true,
})
export class FinanceDTO extends BaseDTO {
  @FilterableField()
  issuedate: Date;
  @FilterableField()
  paymentTerm: Date;
  @FilterableField()
  dueDate: Date;
  @FilterableField({ nullable: true })
  payDay?: Date;
  @FilterableField(() => finaceStatusTypeEnum)
  status: finaceStatusTypeEnum;
  @FilterableField()
  value: number;
  @Field({ nullable: true })
  comments?: string;
}
