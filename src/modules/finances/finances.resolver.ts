import { Query, Resolver } from '@nestjs/graphql';
import { CashFlowGroupDTO } from './dto/cashFlow.dto';
import { FinancesService } from './finances.service';

@Resolver('Finances')
export class FinancesResolver {
  constructor(private financeService: FinancesService) {}

  @Query(() => [CashFlowGroupDTO])
  async gerenareCashFlow(): Promise<CashFlowGroupDTO[]> {
    return this.financeService.gerenateCashFlow();
  }
}
