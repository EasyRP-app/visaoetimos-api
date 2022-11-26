import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Finance } from './entities/finance.entity';

@QueryService(Finance)
export class FinancesService extends TypeOrmQueryService<Finance> {
  constructor(
    @InjectRepository(Finance)
    private repository: Repository<Finance>,
  ) {
    super(repository, { useSoftDelete: true });
  }
}
