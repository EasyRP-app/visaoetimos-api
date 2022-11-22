import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountPlan } from './entities/account-plan.entity';

@QueryService(AccountPlan)
export class AccountPlansService extends TypeOrmQueryService<AccountPlan> {
  constructor(
    @InjectRepository(AccountPlan)
    private repository: Repository<AccountPlan>,
  ) {
    super(repository, { useSoftDelete: true });
  }
}
