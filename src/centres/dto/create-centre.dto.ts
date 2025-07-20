import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCentreDto {
  @ApiProperty({ example: 'Centre Ville', description: 'Nom du centre' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '123 rue Principale', description: 'Adresse du centre' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: 'Paris', description: 'Ville du centre' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: '75000', description: 'Code postal' })
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @ApiProperty({ example: '0123456789', description: 'Téléphone' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'centre@exemple.com', description: 'Email du centre' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 100, description: 'Capacité d’accueil' })
  @IsNumber()
  capacity: number;

  @ApiProperty({ example: true, description: 'Centre actif ou non' })
  @IsBoolean()
  isActive: boolean;
}