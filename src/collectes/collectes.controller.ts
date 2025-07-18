import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CollectesService } from './collectes.service';
import { CreateCollecteDto, UpdateCollecteDto } from './dto/collecte.dto';
import { Collecte } from '../common/interfaces';

@Controller('collectes')
export class CollectesController {
  constructor(private readonly collectesService: CollectesService) {}

  @Get()
  findAll(@Query('status') status?: string, @Query('centreId') centreId?: string): Collecte[] {
    if (status) {
      return this.collectesService.findByStatus(status);
    }
    if (centreId) {
      return this.collectesService.findByCentre(centreId);
    }
    return this.collectesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Collecte {
    return this.collectesService.findOne(id);
  }

  @Post()
  create(@Body() createCollecteDto: CreateCollecteDto): Collecte {
    return this.collectesService.create(createCollecteDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCollecteDto: UpdateCollecteDto): Collecte {
    return this.collectesService.update(id, updateCollecteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.collectesService.remove(id);
  }
}
