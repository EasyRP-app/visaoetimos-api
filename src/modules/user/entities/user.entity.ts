import { HideField } from '@nestjs/graphql';
import { hashPasswordTransform } from 'src/common/crypto';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: false })
  email: string;
  @Column({ nullable: false })
  name: string;

  @HideField()
  @Column({ nullable: false, transformer: hashPasswordTransform })
  password: string;
}
