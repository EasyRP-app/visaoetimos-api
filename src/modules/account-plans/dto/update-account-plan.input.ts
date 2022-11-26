import { CreateAccountPlanInput } from './create-account-plan.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAccountPlanInput extends PartialType(
  CreateAccountPlanInput,
) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
