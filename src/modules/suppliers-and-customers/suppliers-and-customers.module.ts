import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateSuppliersAndCustomerInput } from './dto/create-suppliers-and-customer.input';
import { SuppliersAndCustomerDTO } from './dto/suppliers-and-customer.dto';
import { UpdateSuppliersAndCustomerInput } from './dto/update-suppliers-and-customer.input';
import { SuppliersAndCustomer } from './entities/suppliers-and-customer.entity';
import { SuppliersAndCustomersService } from './suppliers-and-customers.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SuppliersAndCustomer])],
      services: [SuppliersAndCustomersService],
      resolvers: [
        {
          ServiceClass: SuppliersAndCustomersService,
          EntityClass: SuppliersAndCustomer,
          DTOClass: SuppliersAndCustomerDTO,
          CreateDTOClass: CreateSuppliersAndCustomerInput,
          UpdateDTOClass: UpdateSuppliersAndCustomerInput,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [SuppliersAndCustomersService],
})
export class SuppliersAndCustomersModule {}
