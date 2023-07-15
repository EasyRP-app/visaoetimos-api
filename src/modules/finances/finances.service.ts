import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QueryService } from '@nestjs-query/core';
import { CashFlowGroupDTO } from './dto/cashFlow.dto';
import { Finance } from './entities/finance.entity';
@QueryService(Finance)
@Injectable()
export class FinancesService extends TypeOrmQueryService<Finance> {
  constructor(
    @InjectRepository(Finance)
    private repository: Repository<Finance>,
  ) {
    super(repository, { useSoftDelete: true });
  }

  async gerenateCashFlow(year?: string): Promise<CashFlowGroupDTO[]> {
    let finances = await this.repository.find({
      relations: ['accountplan'],
    });

    if (year) {
      finances = finances.filter((finance) => {
        return finance.issuedate.getFullYear() === Number(year);
      });
    }

    const groupedFinances = await finances.reduce((acc, data) => {
      const { accountPlanType } = data.accountplan;

      if (!acc[accountPlanType]) {
        acc[accountPlanType] = [];
      }

      acc[accountPlanType].push(data);
      return acc;
    }, {} as Record<string, Finance[]>);

    const data = Object.entries(groupedFinances).map((value) => {
      return {
        type: value[0],
        cashFlows: value[1],
      };
    });

    return data;
  }
}
