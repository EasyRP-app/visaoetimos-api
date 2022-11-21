import { Column, Entity } from 'typeorm';
import { accountPlanTypeEnum } from './enums/account-plan.enum';
import { costTypeEnum } from './enums/costType.enum';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
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
}
