import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QueryService } from '@nestjs-query/core';

import { CashFlowDataDTO } from './dto/account-plan.dto';
import { AccountPlan } from './entities/account-plan.entity';

@QueryService(AccountPlan)
@Injectable()
export class AccountPlansService extends TypeOrmQueryService<AccountPlan> {
  constructor(
    @InjectRepository(AccountPlan)
    private repository: Repository<AccountPlan>,
  ) {
    super(repository, { useSoftDelete: true });
  }

  async gerenateCashFlowByAccount(): Promise<CashFlowDataDTO[]> {
    const finances = await this.repository.find({ relations: ['finances'] });

    const groupedFinances = finances.reduce((acc, data) => {
      const { accountPlanType } = data;

      if (!acc[accountPlanType]) {
        acc[accountPlanType] = [];
      }
      acc[accountPlanType].push(data);
      return acc;
    }, {} as Record<string, AccountPlan[]>);

    const data = Object.entries(groupedFinances).map((value) => {
      console.log(value);
      return {
        type: value[0],
        cashFlows: value[1],
      };
    });

    return data;
  }
}
