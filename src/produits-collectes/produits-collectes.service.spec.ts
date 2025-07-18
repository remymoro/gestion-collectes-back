import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsCollectesService } from './produits-collectes.service';

describe('ProduitsCollectesService', () => {
  let service: ProduitsCollectesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduitsCollectesService],
    }).compile();

    service = module.get<ProduitsCollectesService>(ProduitsCollectesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
