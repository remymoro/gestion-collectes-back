import { IsString, IsNotEmpty, IsArray, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'nouvelutilisateur', description: "Nom d'utilisateur unique" })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'motdepasse', description: 'Mot de passe de l’utilisateur' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: ['benevole'], description: 'Rôles attribués à l’utilisateur', isArray: true })
  @IsArray()
  @IsNotEmpty()
  roles: string[];

  @ApiPropertyOptional({ example: 1, description: 'ID du centre associé' })
  @IsOptional()
  @IsNumber()
  centreId?: number;
}