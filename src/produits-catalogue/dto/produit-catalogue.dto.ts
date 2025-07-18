import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateProduitCatalogueDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  unit: string;

  @IsNumber()
  estimatedValue: number;

  @IsBoolean()
  isActive: boolean;
}

export class UpdateProduitCatalogueDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  category?: string;

  @IsString()
  unit?: string;

  @IsNumber()
  estimatedValue?: number;

  @IsBoolean()
  isActive?: boolean;
}