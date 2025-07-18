import { Body, Controller, Delete, Get, Param, Post, Put, Query, NotFoundException } from '@nestjs/common';
import { BenevolesService } from './benevoles.service';
import { CreateBenevoleDto, UpdateBenevoleDto } from './dto/benevole.dto';
import { Benevole } from '../common/interfaces';

@Controller('benevoles')
export class BenevolesController {
  constructor(private readonly benevolesService: BenevolesService) {}

  @Get()
  findAll(@Query('available') available?: string): Benevole[] {
    if (available === 'true') {
      return this.benevolesService.findAvailable();
    }
    return this.benevolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Benevole {
    return this.benevolesService.findOne(id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string): Benevole {
    const benevole = this.benevolesService.findByUserId(userId);
    if (!benevole) {
      throw new NotFoundException(`Benevole with user ID ${userId} not found`);
    }
    return benevole;
  }

  @Post()
  create(@Body() createBenevoleDto: CreateBenevoleDto): Benevole {
    return this.benevolesService.create(createBenevoleDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBenevoleDto: UpdateBenevoleDto): Benevole {
    return this.benevolesService.update(id, updateBenevoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.benevolesService.remove(id);
  }
}
