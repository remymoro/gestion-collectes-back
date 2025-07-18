import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CentresService } from './centres.service';
import { CreateCentreDto, UpdateCentreDto } from './dto/centre.dto';
import { Centre } from '../common/interfaces';

@Controller('centres')
export class CentresController {
  constructor(private readonly centresService: CentresService) {}

  @Get()
  findAll(): Centre[] {
    return this.centresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Centre {
    return this.centresService.findOne(id);
  }

  @Post()
  create(@Body() createCentreDto: CreateCentreDto): Centre {
    return this.centresService.create(createCentreDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCentreDto: UpdateCentreDto): Centre {
    return this.centresService.update(id, updateCentreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.centresService.remove(id);
  }
}
