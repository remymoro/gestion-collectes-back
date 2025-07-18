import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsEmail } from 'class-validator';

export class CreateCentreDto {
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
  email: string;

  @IsNumber()
  capacity: number;

  @IsBoolean()
  isActive: boolean;
}

export class UpdateCentreDto {
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
  email?: string;

  @IsNumber()
  capacity?: number;

  @IsBoolean()
  isActive?: boolean;
}