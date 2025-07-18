import { Test, TestingModule } from '@nestjs/testing';
import { MagasinsService } from './magasins.service';

describe('MagasinsService', () => {
  let service: MagasinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagasinsService],
    }).compile();

    service = module.get<MagasinsService>(MagasinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
