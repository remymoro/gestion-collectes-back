import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MagasinsService } from './magasins.service';
import { CreateMagasinDto, UpdateMagasinDto } from './dto/magasin.dto';
import { Magasin } from '../common/interfaces';

@Controller('magasins')
export class MagasinsController {
  constructor(private readonly magasinsService: MagasinsService) {}

  @Get()
  findAll(): Magasin[] {
    return this.magasinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Magasin {
    return this.magasinsService.findOne(id);
  }

  @Post()
  create(@Body() createMagasinDto: CreateMagasinDto): Magasin {
    return this.magasinsService.create(createMagasinDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMagasinDto: UpdateMagasinDto): Magasin {
    return this.magasinsService.update(id, updateMagasinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.magasinsService.remove(id);
  }
}
