import { User } from 'src/modules/users/entities/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { userFaker } from '../utils/user';

// eslint-disable-next-line strict
export class createUser1681020823158 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const customerRerpository = queryRunner.connection.getRepository(User);
    await Promise.all(
      userFaker.map(async (data) => {
        const newdata = customerRerpository.create({
          name: data.name,
          password: data.password,
          email: data.email,
        });
        console.log(newdata);
        await customerRerpository.save(newdata);
      }),
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async down(queryRunner: QueryRunner): Promise<void> {
    //  do nothing
  }
}
