import { hashPasswordTransform } from 'src/common/crypto';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;
  @Column()
  email: string;
  @Column({ transformer: hashPasswordTransform })
  password: string;
}
