import { Module } from '@nestjs/common';
import { CollectesController } from './collectes.controller';
import { CollectesService } from './collectes.service';

@Module({
  controllers: [CollectesController],
  providers: [CollectesService],
  exports: [CollectesService]
})
export class CollectesModule {}
