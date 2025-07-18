import { Test, TestingModule } from '@nestjs/testing';
import { CollectesController } from './collectes.controller';

describe('CollectesController', () => {
  let controller: CollectesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectesController],
    }).compile();

    controller = module.get<CollectesController>(CollectesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
