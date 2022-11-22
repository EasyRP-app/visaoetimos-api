import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateFinanceInput } from './dto/create-finance.input';
import { FinanceDTO } from './dto/finance.dto';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { Finance } from './entities/finance.entity';
import { FinancesService } from './finances.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Finance])],
      services: [FinancesService],
      resolvers: [
        {
          ServiceClass: FinancesService,
          EntityClass: Finance,
          DTOClass: FinanceDTO,
          CreateDTOClass: CreateFinanceInput,
          UpdateDTOClass: UpdateFinanceInput,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [FinancesService],
})
export class FinancesModule {}
