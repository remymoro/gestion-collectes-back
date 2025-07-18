import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsCollectesController } from './produits-collectes.controller';
import { ProduitsCollectesService } from './produits-collectes.service';

describe('ProduitsCollectesController', () => {
  let controller: ProduitsCollectesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduitsCollectesController],
      providers: [ProduitsCollectesService],
    }).compile();

    controller = module.get<ProduitsCollectesController>(ProduitsCollectesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
