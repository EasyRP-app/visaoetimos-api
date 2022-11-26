import { AccountPlan } from 'src/modules/account-plans/entities/account-plan.entity';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { finaceStatusTypeEnum } from './enums/status.enum';

@Entity()
export class Finance extends BaseEntity {
  @Column()
  issuedate: string;
  @Column()
  paymentTerm: Date;
  @Column()
  dueDate: Date;
  @Column({ nullable: true })
  payDay?: Date;
  @Column({ type: 'enum', enum: finaceStatusTypeEnum, nullable: false })
  status: finaceStatusTypeEnum;
  @Column({ type: 'float' })
  value: number;
  @Column({ length: 200, nullable: true })
  comments?: string;

  @ManyToOne(() => AccountPlan)
  accountplan?: AccountPlan;

  @Column({ nullable: true })
  accountplanId: string;
}