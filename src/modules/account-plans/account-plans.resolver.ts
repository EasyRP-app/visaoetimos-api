import { Args, Query, Resolver } from '@nestjs/graphql';
import { AccountPlansService } from './account-plans.service';
import { CashFlowDataDTO } from './dto/account-plan.dto';

@Resolver('Finances')
export class AccountPlansResolver {
  constructor(private accountService: AccountPlansService) {}

  @Query(() => [CashFlowDataDTO])
  async gerenateCashFlowByAccount(
    @Args({ name: 'year', type: () => String, nullable: true })
    year: string,
  ): Promise<CashFlowDataDTO[]> {
    return this.accountService.gerenateCashFlowByAccount(year);
  }
}
