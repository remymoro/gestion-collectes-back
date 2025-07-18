import { Test, TestingModule } from '@nestjs/testing';
import { MagasinsController } from './magasins.controller';
import { MagasinsService } from './magasins.service';

describe('MagasinsController', () => {
  let controller: MagasinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagasinsController],
      providers: [MagasinsService],
    }).compile();

    controller = module.get<MagasinsController>(MagasinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
