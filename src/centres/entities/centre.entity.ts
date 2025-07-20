import { Magasin } from 'src/magasins/entities/magasin.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OneToMany } from 'typeorm';

@Entity()
export class Centre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column('int')
  capacity: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Magasin, magasin => magasin.centre)
  magasins: Magasin[];
}
