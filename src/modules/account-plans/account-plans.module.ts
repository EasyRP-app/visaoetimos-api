import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

import { AccountPlansService } from './account-plans.service';
import { AccountPlanDTO } from './dto/account-plan.dto';
import { CreateAccountPlanInput } from './dto/create-account-plan.input';
import { UpdateAccountPlanInput } from './dto/update-account-plan.input';
import { AccountPlan } from './entities/account-plan.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AccountPlan])],
      services: [AccountPlansService],
      resolvers: [
        {
          ServiceClass: AccountPlansService,
          EntityClass: AccountPlan,
          DTOClass: AccountPlanDTO,
          CreateDTOClass: CreateAccountPlanInput,
          UpdateDTOClass: UpdateAccountPlanInput,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [AccountPlansService],
})
export class AccountPlansModule {}
