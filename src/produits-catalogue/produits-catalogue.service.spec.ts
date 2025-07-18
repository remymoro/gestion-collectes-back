import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsCatalogueService } from './produits-catalogue.service';

describe('ProduitsCatalogueService', () => {
  let service: ProduitsCatalogueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduitsCatalogueService],
    }).compile();

    service = module.get<ProduitsCatalogueService>(ProduitsCatalogueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
