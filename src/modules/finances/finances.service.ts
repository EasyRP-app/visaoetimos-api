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

  // async gerenareCashFlow(): Promise<CashFlowGroupDTO[]> {
  //   const finances = await this.repository
  //     .createQueryBuilder('finances')
  //     .innerJoin('finances.accountplan', 'accountplan')
  //     .addSelect('accountplan.accountPlanType')

  //     .getMany();

  //   const arr = [];
  //   const orderedData = groupBy(finances, 'accountplan.accountPlanType');
  //   Object.keys(orderedData).forEach((key) => {
  //     arr.push(orderedData[key]);
  //   });
  //   console.log(arr.map());
  //   return arr;
  // }

  async gerenateCashFlow(): Promise<CashFlowGroupDTO[]> {
    const finances = await this.repository.find({ relations: ['accountplan'] });

    const groupedFinances = finances.reduce((acc, data) => {
      const { accountPlanType } = data.accountplan;

      if (!acc[accountPlanType]) {
        acc[accountPlanType] = [];
      }
      acc[accountPlanType].push(data);
      return acc;
    }, {} as Record<string, Finance[]>);

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
