import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../../common/interfaces';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEnum(UserRole)
  role: UserRole;
}

export class UpdateUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsEnum(UserRole)
  role?: UserRole;
}