import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { UpdateAccountPlanInput } from 'src/modules/account-plans/dto/update-account-plan.input';
import { AccountPlan } from 'src/modules/account-plans/entities/account-plan.entity';
import { Column } from 'typeorm';
import { finaceStatusTypeEnum } from '../entities/enums/status.enum';

@InputType('CreateFinance')
export class CreateFinanceInput {
  @Field()
  issuedate: string;
  @Field()
  paymentTerm: Date;
  @Field()
  dueDate: Date;
  @IsOptional()
  @Field()
  payDay?: Date;
  @Field(() => finaceStatusTypeEnum)
  status: finaceStatusTypeEnum;
  @Field()
  value: number;

  @IsOptional()
  @Field()
  comments?: string;

  @Field({ nullable: true })
  accountplanId: string;

  // @Field(() => UpdateAccountPlanInput)
  // accountplan: UpdateAccountPlanInput;
}
