import { AccountPlan } from 'src/modules/account-plans/entities/account-plan.entity';
import { accountPlanTypeEnum } from 'src/modules/account-plans/entities/enums/account-plan.enum';
import { costTypeEnum } from 'src/modules/account-plans/entities/enums/costType.enum';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { accountPlanData } from '../utils/accountPlanFaker';
// eslint-disable-next-line strict
export class createAccountPlan1681027457233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const faccountPlanRository =
      queryRunner.connection.getRepository(AccountPlan);

    const newData = accountPlanData.map((data) => ({
      name: data?.name,
      description: data?.description,
      accountPlanType: accountPlanTypeEnum[data?.accountPlanType],
      costType: costTypeEnum[data?.costType],
    }));

    const newEntities = faccountPlanRository.create(newData);

    await faccountPlanRository.save(newEntities);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
