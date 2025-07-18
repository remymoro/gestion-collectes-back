import { IsString, IsNotEmpty, IsBoolean, IsEmail } from 'class-validator';

export class CreateMagasinDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsEmail()
  contactEmail: string;

  @IsNotEmpty()
  @IsString()
  contactPerson: string;

  @IsBoolean()
  isPartner: boolean;
}

export class UpdateMagasinDto {
  @IsString()
  name?: string;

  @IsString()
  address?: string;

  @IsString()
  city?: string;

  @IsString()
  postalCode?: string;

  @IsString()
  phone?: string;

  @IsEmail()
  contactEmail?: string;

  @IsString()
  contactPerson?: string;

  @IsBoolean()
  isPartner?: boolean;
}