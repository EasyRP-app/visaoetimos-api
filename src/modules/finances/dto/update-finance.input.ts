import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateFinanceInput } from './create-finance.input';

@InputType()
export class UpdateFinanceInput extends PartialType(CreateFinanceInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
