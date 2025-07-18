import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsCatalogueController } from './produits-catalogue.controller';

describe('ProduitsCatalogueController', () => {
  let controller: ProduitsCatalogueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduitsCatalogueController],
    }).compile();

    controller = module.get<ProduitsCatalogueController>(ProduitsCatalogueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
