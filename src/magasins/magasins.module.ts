import { Module } from '@nestjs/common';
import { MagasinsController } from './magasins.controller';
import { MagasinsService } from './magasins.service';

@Module({
  controllers: [MagasinsController],
  providers: [MagasinsService]
})
export class MagasinsModule {}
