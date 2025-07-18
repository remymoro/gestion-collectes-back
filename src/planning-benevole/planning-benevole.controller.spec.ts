import { Test, TestingModule } from '@nestjs/testing';
import { PlanningBenevoleController } from './planning-benevole.controller';

describe('PlanningBenevoleController', () => {
  let controller: PlanningBenevoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanningBenevoleController],
    }).compile();

    controller = module.get<PlanningBenevoleController>(PlanningBenevoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
