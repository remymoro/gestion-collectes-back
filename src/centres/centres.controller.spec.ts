import { Test, TestingModule } from '@nestjs/testing';
import { CentresController } from './centres.controller';

describe('CentresController', () => {
  let controller: CentresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentresController],
    }).compile();

    controller = module.get<CentresController>(CentresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
