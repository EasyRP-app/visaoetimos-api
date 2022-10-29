import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
@InputType('CreateSuppliersAndCustomer')
export class CreateSuppliersAndCustomerInput {
  @IsOptional()
  @Field()
  name?: string;

  @Field()
  cpf: string;

  @IsOptional()
  @Field()
  email?: string;

  @Field()
  phone: string;

  @Field()
  address: string;
}
