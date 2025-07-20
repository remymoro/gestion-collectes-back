import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Centre } from '../../centres/entities/centre.entity';

@Entity()
export class Magasin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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
  contactEmail: string;

  @Column()
  contactPerson: string;

  @Column({ default: false })
  isPartner: boolean;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => Centre, centre => centre.magasins, { onDelete: 'CASCADE' })
  centre: Centre;
}