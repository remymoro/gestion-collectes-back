import { IsString, IsNotEmpty, IsBoolean, IsEmail, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMagasinDto {
  @ApiProperty({ example: 'Aldi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '12 rue du Marché' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: 'Paris' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: '75000' })
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @ApiProperty({ example: '0123456789' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'contact@aldi.fr' })
  @IsEmail()
  contactEmail: string;

  @ApiProperty({ example: 'Jean Dupont' })
  @IsNotEmpty()
  @IsString()
  contactPerson: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isPartner: boolean;

  @ApiProperty({ example: 'aldi.jpg', required: false })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({ example: 1, description: 'ID du centre' })
  @IsNotEmpty()
  @IsNumber()
  centreId: number;
}