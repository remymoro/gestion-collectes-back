import { Test, TestingModule } from '@nestjs/testing';
import { CollectesController } from './collectes.controller';
import { CollectesService } from './collectes.service';

describe('CollectesController', () => {
  let controller: CollectesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectesController],
      providers: [CollectesService],
    }).compile();

    controller = module.get<CollectesController>(CollectesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
