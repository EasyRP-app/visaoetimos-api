import { InputType, Int, Field } from '@nestjs/graphql';
import { accountPlanTypeEnum } from '../entities/enums/account-plan.enum';
import { costTypeEnum } from '../entities/enums/costType.enum';

@InputType('CreateAccountPlan')
export class CreateAccountPlanInput {
  @Field()
  name: string;

  @Field(() => accountPlanTypeEnum)
  accountPlanType: accountPlanTypeEnum;

  @Field(() => costTypeEnum)
  costType: costTypeEnum;
}
