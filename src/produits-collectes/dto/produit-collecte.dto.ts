import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProduitCollecteDto {
  @IsNotEmpty()
  @IsString()
  collecteId: string;

  @IsNotEmpty()
  @IsString()
  produitCatalogueId: string;

  @IsNumber()
  quantityCollected: number;

  @IsNumber()
  quantityTarget: number;
}

export class UpdateProduitCollecteDto {
  @IsString()
  collecteId?: string;

  @IsString()
  produitCatalogueId?: string;

  @IsNumber()
  quantityCollected?: number;

  @IsNumber()
  quantityTarget?: number;
}