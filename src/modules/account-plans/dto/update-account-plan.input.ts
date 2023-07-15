import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateAccountPlanInput } from './create-account-plan.input';

@InputType()
export class UpdateAccountPlanInput extends PartialType(
  CreateAccountPlanInput,
) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
