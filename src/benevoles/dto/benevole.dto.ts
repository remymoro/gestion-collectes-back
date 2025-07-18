import { IsString, IsNotEmpty, IsArray, IsBoolean } from 'class-validator';

export class CreateBenevoleDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsArray()
  @IsString({ each: true })
  availability: string[];

  @IsArray()
  @IsString({ each: true })
  skills: string[];

  @IsString()
  experience: string;

  @IsBoolean()
  isAvailable: boolean;
}

export class UpdateBenevoleDto {
  @IsString()
  userId?: string;

  @IsArray()
  @IsString({ each: true })
  availability?: string[];

  @IsArray()
  @IsString({ each: true })
  skills?: string[];

  @IsString()
  experience?: string;

  @IsBoolean()
  isAvailable?: boolean;
}