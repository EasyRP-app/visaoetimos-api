import { CreateSuppliersAndCustomerInput } from './create-suppliers-and-customer.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateSuppliersAndCustomerInput extends PartialType(
  CreateSuppliersAndCustomerInput,
) {
  @Field(() => ID)
  id?: string;
}
