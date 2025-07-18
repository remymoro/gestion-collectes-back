import { Module } from '@nestjs/common';
import { PlanningBenevoleController } from './planning-benevole.controller';
import { PlanningBenevoleService } from './planning-benevole.service';

@Module({
  controllers: [PlanningBenevoleController],
  providers: [PlanningBenevoleService],
  exports: [PlanningBenevoleService]
})
export class PlanningBenevoleModule {}
