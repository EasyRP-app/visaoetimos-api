import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuppliersAndCustomer } from './entities/suppliers-and-customer.entity';

@QueryService(SuppliersAndCustomer)
export class SuppliersAndCustomersService extends TypeOrmQueryService<SuppliersAndCustomer> {
  constructor(
    @InjectRepository(SuppliersAndCustomer)
    private repository: Repository<SuppliersAndCustomer>,
  ) {
    super(repository, { useSoftDelete: true });
  }
}
