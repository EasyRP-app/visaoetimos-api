import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
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
}
