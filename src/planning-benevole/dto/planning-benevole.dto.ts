import { IsString, IsNotEmpty, IsEnum, IsDateString } from 'class-validator';
import { PlanningStatus } from '../../common/interfaces';

export class CreatePlanningBenevoleDto {
  @IsNotEmpty()
  @IsString()
  benevoleId: string;

  @IsNotEmpty()
  @IsString()
  collecteId: string;

  @IsDateString()
  assignedDate: string;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsEnum(PlanningStatus)
  status: PlanningStatus;
}

export class UpdatePlanningBenevoleDto {
  @IsString()
  benevoleId?: string;

  @IsString()
  collecteId?: string;

  @IsDateString()
  assignedDate?: string;

  @IsString()
  startTime?: string;

  @IsString()
  endTime?: string;

  @IsString()
  role?: string;

  @IsEnum(PlanningStatus)
  status?: PlanningStatus;
}