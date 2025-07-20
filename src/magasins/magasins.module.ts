import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagasinsController } from './magasins.controller';
import { MagasinsService } from './magasins.service';
import { Magasin } from './entities/magasin.entity';
import { Centre } from '../centres/entities/centre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Magasin, Centre])],
  controllers: [MagasinsController],
  providers: [MagasinsService],
  exports: [MagasinsService],
})
export class MagasinsModule {}
