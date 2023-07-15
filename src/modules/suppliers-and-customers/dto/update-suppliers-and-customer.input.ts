import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateSuppliersAndCustomerInput } from './create-suppliers-and-customer.input';

@InputType()
export class UpdateSuppliersAndCustomerInput extends PartialType(
  CreateSuppliersAndCustomerInput,
) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
