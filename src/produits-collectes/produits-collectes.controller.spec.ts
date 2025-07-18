import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsCollectesController } from './produits-collectes.controller';

describe('ProduitsCollectesController', () => {
  let controller: ProduitsCollectesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduitsCollectesController],
    }).compile();

    controller = module.get<ProduitsCollectesController>(ProduitsCollectesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
