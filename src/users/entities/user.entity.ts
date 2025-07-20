import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Centre } from '../../centres/entities/centre.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column('simple-array')
  roles: string[];

  @ManyToOne(() => Centre, { nullable: true })
  centre: Centre;
}