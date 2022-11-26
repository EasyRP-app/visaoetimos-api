import { AccountPlan } from 'src/modules/account-plans/entities/account-plan.entity';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { SuppliersAndCustomer } from 'src/modules/suppliers-and-customers/entities/suppliers-and-customer.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { finaceStatusTypeEnum } from './enums/status.enum';

@Entity()
export class Finance extends BaseEntity {
  @Column()
  issuedate: Date;
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

  @ManyToOne(() => SuppliersAndCustomer)
  SupplierAndCustomer?: SuppliersAndCustomer;

  @Column({ nullable: true })
  accountplanId?: string;

  @Column({ nullable: true })
  supplierAndCustomerId?: string;
}
