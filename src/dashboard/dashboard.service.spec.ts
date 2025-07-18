import { Test, TestingModule } from '@nestjs/testing';
import { DashboardService } from './dashboard.service';
import { UsersService } from '../users/users.service';
import { CentresService } from '../centres/centres.service';
import { MagasinsService } from '../magasins/magasins.service';
import { CollectesService } from '../collectes/collectes.service';
import { BenevolesService } from '../benevoles/benevoles.service';
import { ProduitsCatalogueService } from '../produits-catalogue/produits-catalogue.service';
import { PlanningBenevoleService } from '../planning-benevole/planning-benevole.service';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DashboardService,
        UsersService,
        CentresService,
        MagasinsService,
        CollectesService,
        BenevolesService,
        ProduitsCatalogueService,
        PlanningBenevoleService,
      ],
    }).compile();

    service = module.get<DashboardService>(DashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
