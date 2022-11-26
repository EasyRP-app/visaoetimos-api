import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Finance } from 'src/modules/finances/entities/finance.entity';
import { Column, Entity, OneToMany } from 'typeorm';
@Entity()
export class SuppliersAndCustomer extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column()
  address: string;

  @OneToMany(() => Finance, (item) => item.SupplierAndCustomer, {
    nullable: true,
  })
  finaces?: Finance[];
}
