import { Module } from '@nestjs/common';
import { ProduitsCollectesController } from './produits-collectes.controller';
import { ProduitsCollectesService } from './produits-collectes.service';

@Module({
  controllers: [ProduitsCollectesController],
  providers: [ProduitsCollectesService]
})
export class ProduitsCollectesModule {}
