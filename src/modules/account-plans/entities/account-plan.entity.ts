import { Column, Entity, OneToMany } from 'typeorm';
import { accountPlanTypeEnum } from './enums/account-plan.enum';
import { costTypeEnum } from './enums/costType.enum';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Finance } from 'src/modules/finances/entities/finance.entity';
@Entity()
export class AccountPlan extends BaseEntity {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: accountPlanTypeEnum,
    nullable: false,
  })
  accountPlanType: accountPlanTypeEnum;

  @Column({
    type: 'enum',
    enum: costTypeEnum,
    nullable: false,
  })
  costType: costTypeEnum;

  @OneToMany(() => Finance, (item) => item.accountplan, { nullable: true })
  finaces?: Finance[];
}
