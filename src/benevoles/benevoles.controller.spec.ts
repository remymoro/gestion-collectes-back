import { Test, TestingModule } from '@nestjs/testing';
import { BenevolesController } from './benevoles.controller';

describe('BenevolesController', () => {
  let controller: BenevolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenevolesController],
    }).compile();

    controller = module.get<BenevolesController>(BenevolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
