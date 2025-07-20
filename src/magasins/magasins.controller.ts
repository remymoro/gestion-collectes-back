import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { MagasinsService } from './magasins.service';
import { CreateMagasinDto } from './dto/create-magasin.dto';
import { UpdateMagasinDto } from './dto/update-magasin.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('magasins')
@Controller('magasins')
export class MagasinsController {
  constructor(private readonly magasinsService: MagasinsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un magasin' })
  @ApiBody({ type: CreateMagasinDto })
  @ApiResponse({ status: 201, description: 'Magasin créé.' })
  create(@Body() createMagasinDto: CreateMagasinDto) {
    return this.magasinsService.create(createMagasinDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les magasins' })
  @ApiResponse({ status: 200, description: 'Liste des magasins.' })
  findAll() {
    return this.magasinsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un magasin par id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Magasin trouvé.' })
  @ApiResponse({ status: 404, description: 'Magasin non trouvé.' })
  findOne(@Param('id') id: number) {
    return this.magasinsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un magasin' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateMagasinDto })
  @ApiResponse({ status: 200, description: 'Magasin mis à jour.' })
  @ApiResponse({ status: 404, description: 'Magasin non trouvé.' })
  update(@Param('id') id: number, @Body() updateMagasinDto: UpdateMagasinDto) {
    return this.magasinsService.update(id, updateMagasinDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un magasin' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Magasin supprimé.' })
  @ApiResponse({ status: 404, description: 'Magasin non trouvé.' })
  remove(@Param('id') id: number) {
    return this.magasinsService.remove(id);
  }
}
