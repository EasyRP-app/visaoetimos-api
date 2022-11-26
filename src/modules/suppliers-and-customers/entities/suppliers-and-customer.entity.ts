import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';
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
}