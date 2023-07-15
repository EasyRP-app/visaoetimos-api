import { SuppliersAndCustomer } from 'src/modules/suppliers-and-customers/entities/suppliers-and-customer.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { customerData } from '../utils/customerFaker';

// eslint-disable-next-line strict
export class createFinance1681020823157 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const customerRerpository =
      queryRunner.connection.getRepository(SuppliersAndCustomer);
    await Promise.all(
      customerData.map(async (data) => {
        const newdata = customerRerpository.create({
          address: data?.address,
          cpf: data?.cpf.toString(),
          email: data?.email,
          name: data?.name,
          phone: data?.phone,
        });
        console.log(newdata);
        await customerRerpository.save(newdata);
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
