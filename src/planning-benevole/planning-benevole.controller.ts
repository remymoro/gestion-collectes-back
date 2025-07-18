import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PlanningBenevoleService } from './planning-benevole.service';
import { CreatePlanningBenevoleDto, UpdatePlanningBenevoleDto } from './dto/planning-benevole.dto';
import { PlanningBenevole } from '../common/interfaces';

@Controller('planning-benevole')
export class PlanningBenevoleController {
  constructor(private readonly planningService: PlanningBenevoleService) {}

  @Get()
  findAll(
    @Query('benevoleId') benevoleId?: string,
    @Query('collecteId') collecteId?: string,
    @Query('status') status?: string,
  ): PlanningBenevole[] {
    if (benevoleId) {
      return this.planningService.findByBenevole(benevoleId);
    }
    if (collecteId) {
      return this.planningService.findByCollecte(collecteId);
    }
    if (status) {
      return this.planningService.findByStatus(status);
    }
    return this.planningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): PlanningBenevole {
    return this.planningService.findOne(id);
  }

  @Post()
  create(@Body() createPlanningDto: CreatePlanningBenevoleDto): PlanningBenevole {
    return this.planningService.create(createPlanningDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlanningDto: UpdatePlanningBenevoleDto): PlanningBenevole {
    return this.planningService.update(id, updatePlanningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.planningService.remove(id);
  }
}
