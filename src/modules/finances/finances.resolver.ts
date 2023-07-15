import { Args, Query, Resolver } from '@nestjs/graphql';
import { CashFlowGroupDTO } from './dto/cashFlow.dto';
import { FinancesService } from './finances.service';

@Resolver('Finances')
export class FinancesResolver {
  constructor(private financeService: FinancesService) {}

  @Query(() => [CashFlowGroupDTO])
  async gerenateCashFlow(
    @Args({ name: 'year', type: () => String, nullable: true })
    year: string,
  ): Promise<CashFlowGroupDTO[]> {
    return this.financeService.gerenateCashFlow(year);
  }
}
