import { AccountPlan } from 'src/modules/account-plans/entities/account-plan.entity';
import { finaceStatusTypeEnum } from 'src/modules/finances/entities/enums/status.enum';
import { Finance } from 'src/modules/finances/entities/finance.entity';
import { SuppliersAndCustomer } from 'src/modules/suppliers-and-customers/entities/suppliers-and-customer.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { financesData } from '../utils/accounts';

export class createfinanceData1681029350851 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    const constSupliersAndCustomer = queryRunner.connection
      .getRepository(SuppliersAndCustomer)
      .find();

    const accountPlanData = queryRunner.connection
      .getRepository(AccountPlan)
      .find();

    const acountPlanFinal = (await accountPlanData).map((data) => {
      return data.id;
    });
    const constSupliersAndCustomerFinal = (await constSupliersAndCustomer).map(
      (data) => {
        return data.id;
      },
    );

    const financeRepository = queryRunner.connection.getRepository(Finance);

    financesData.map(async (data) => {
      const newData = financeRepository.create({
        issuedate: data?.issueDate,
        value: data?.value,
        dueDate: data?.dueDate,
        status:
          data?.payDay != null
            ? finaceStatusTypeEnum.OPEN
            : finaceStatusTypeEnum.PAID,
        paymentTerm: data?.paymentTerm,
        payDay: data?.payDay,
        accountplanId: acountPlanFinal[getRandomInt(0, 200)],
        supplierAndCustomerId:
          constSupliersAndCustomerFinal[getRandomInt(0, 200)],
      });
      if (data?.payDay != 'blank') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        newData.payDay = data.payDay;
      } else {
        delete newData.dueDate;
      }
      await financeRepository.save(newData);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
