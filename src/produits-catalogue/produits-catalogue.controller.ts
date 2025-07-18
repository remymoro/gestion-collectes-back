import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProduitsCatalogueService } from './produits-catalogue.service';
import { CreateProduitCatalogueDto, UpdateProduitCatalogueDto } from './dto/produit-catalogue.dto';
import { ProduitCatalogue } from '../common/interfaces';

@Controller('produits-catalogue')
export class ProduitsCatalogueController {
  constructor(private readonly produitsService: ProduitsCatalogueService) {}

  @Get()
  findAll(@Query('category') category?: string, @Query('active') active?: string): ProduitCatalogue[] {
    if (category) {
      return this.produitsService.findByCategory(category);
    }
    if (active === 'true') {
      return this.produitsService.findActive();
    }
    return this.produitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ProduitCatalogue {
    return this.produitsService.findOne(id);
  }

  @Post()
  create(@Body() createProduitDto: CreateProduitCatalogueDto): ProduitCatalogue {
    return this.produitsService.create(createProduitDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProduitDto: UpdateProduitCatalogueDto): ProduitCatalogue {
    return this.produitsService.update(id, updateProduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.produitsService.remove(id);
  }
}
