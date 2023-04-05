import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsUrl } from 'class-validator';

@Entity()
export class Short {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  @IsUrl()
  url: string;

  @CreateDateColumn()
  createdAt: Date;
}
