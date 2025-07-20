import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Centre } from '../centres/entities/centre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Centre])], // <-- Ajoute Centre ici
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}