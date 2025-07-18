import { Module } from '@nestjs/common';
import { ProduitsCatalogueController } from './produits-catalogue.controller';
import { ProduitsCatalogueService } from './produits-catalogue.service';

@Module({
  controllers: [ProduitsCatalogueController],
  providers: [ProduitsCatalogueService],
  exports: [ProduitsCatalogueService]
})
export class ProduitsCatalogueModule {}
