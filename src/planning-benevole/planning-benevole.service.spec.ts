import { Test, TestingModule } from '@nestjs/testing';
import { PlanningBenevoleService } from './planning-benevole.service';

describe('PlanningBenevoleService', () => {
  let service: PlanningBenevoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanningBenevoleService],
    }).compile();

    service = module.get<PlanningBenevoleService>(PlanningBenevoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
