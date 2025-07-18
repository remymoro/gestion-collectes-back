import { Module } from '@nestjs/common';
import { BenevolesController } from './benevoles.controller';
import { BenevolesService } from './benevoles.service';

@Module({
  controllers: [BenevolesController],
  providers: [BenevolesService],
  exports: [BenevolesService]
})
export class BenevolesModule {}
