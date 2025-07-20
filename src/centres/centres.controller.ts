import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { CentresService } from './centres.service';
import { CreateCentreDto } from './dto/create-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('centres')
@Controller('centres')
export class CentresController {
  constructor(private readonly centresService: CentresService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un centre' })
  @ApiBody({ type: CreateCentreDto })
  @ApiResponse({ status: 201, description: 'Centre créé.' })
  create(@Body() createCentreDto: CreateCentreDto) {
    return this.centresService.create(createCentreDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les centres' })
  @ApiResponse({ status: 200, description: 'Liste des centres.' })
  findAll() {
    return this.centresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un centre par id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Centre trouvé.' })
  @ApiResponse({ status: 404, description: 'Centre non trouvé.' })
  findOne(@Param('id') id: number) {
    return this.centresService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un centre' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateCentreDto })
  @ApiResponse({ status: 200, description: 'Centre mis à jour.' })
  @ApiResponse({ status: 404, description: 'Centre non trouvé.' })
  update(@Param('id') id: number, @Body() updateCentreDto: UpdateCentreDto) {
    return this.centresService.update(id, updateCentreDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un centre' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Centre supprimé.' })
  @ApiResponse({ status: 404, description: 'Centre non trouvé.' })
  remove(@Param('id') id: number) {
    return this.centresService.remove(id);
  }
}
