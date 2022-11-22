import { CreateAccountPlanInput } from './create-account-plan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAccountPlanInput extends PartialType(
  CreateAccountPlanInput,
) {
  @Field(() => Int)
  id: number;
}
