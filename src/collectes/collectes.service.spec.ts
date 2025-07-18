import { Test, TestingModule } from '@nestjs/testing';
import { CollectesService } from './collectes.service';

describe('CollectesService', () => {
  let service: CollectesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectesService],
    }).compile();

    service = module.get<CollectesService>(CollectesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
