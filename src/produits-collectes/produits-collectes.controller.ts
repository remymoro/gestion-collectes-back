import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProduitsCollectesService } from './produits-collectes.service';
import { CreateProduitCollecteDto, UpdateProduitCollecteDto } from './dto/produit-collecte.dto';
import { ProduitCollecte } from '../common/interfaces';

@Controller('produits-collectes')
export class ProduitsCollectesController {
  constructor(private readonly produitsService: ProduitsCollectesService) {}

  @Get()
  findAll(@Query('collecteId') collecteId?: string, @Query('produitCatalogueId') produitCatalogueId?: string): ProduitCollecte[] {
    if (collecteId) {
      return this.produitsService.findByCollecte(collecteId);
    }
    if (produitCatalogueId) {
      return this.produitsService.findByProduitCatalogue(produitCatalogueId);
    }
    return this.produitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ProduitCollecte {
    return this.produitsService.findOne(id);
  }

  @Post()
  create(@Body() createProduitDto: CreateProduitCollecteDto): ProduitCollecte {
    return this.produitsService.create(createProduitDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProduitDto: UpdateProduitCollecteDto): ProduitCollecte {
    return this.produitsService.update(id, updateProduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.produitsService.remove(id);
  }
}
