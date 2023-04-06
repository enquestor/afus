import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsUrl, NotContains } from 'class-validator';

@Entity()
export class Short {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @IsUrl()
  @NotContains(process.env.AFUS_URL || ' ')
  @Column()
  url: string;

  @CreateDateColumn()
  createdAt: Date;
}
