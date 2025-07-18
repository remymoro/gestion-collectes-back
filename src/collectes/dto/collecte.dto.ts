import { IsString, IsNotEmpty, IsArray, IsEnum, IsNumber, IsDateString } from 'class-validator';
import { CollecteStatus } from '../../common/interfaces';

export class CreateCollecteDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsNotEmpty()
  @IsString()
  centreId: string;

  @IsArray()
  @IsString({ each: true })
  magasinIds: string[];

  @IsEnum(CollecteStatus)
  status: CollecteStatus;

  @IsNumber()
  targetAmount: number;

  @IsNumber()
  currentAmount: number;
}

export class UpdateCollecteDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsDateString()
  startDate?: string;

  @IsDateString()
  endDate?: string;

  @IsString()
  centreId?: string;

  @IsArray()
  @IsString({ each: true })
  magasinIds?: string[];

  @IsEnum(CollecteStatus)
  status?: CollecteStatus;

  @IsNumber()
  targetAmount?: number;

  @IsNumber()
  currentAmount?: number;
}