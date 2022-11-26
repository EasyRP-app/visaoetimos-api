import { CreateFinanceInput } from './create-finance.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateFinanceInput extends PartialType(CreateFinanceInput) {
  @Field(() => ID)
  id: string;
}
