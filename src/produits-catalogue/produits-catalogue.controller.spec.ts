import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsCatalogueController } from './produits-catalogue.controller';
import { ProduitsCatalogueService } from './produits-catalogue.service';

describe('ProduitsCatalogueController', () => {
  let controller: ProduitsCatalogueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduitsCatalogueController],
      providers: [ProduitsCatalogueService],
    }).compile();

    controller = module.get<ProduitsCatalogueController>(ProduitsCatalogueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
