import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { UsersService } from '../users/users.service';
import { CentresService } from '../centres/centres.service';
import { MagasinsService } from '../magasins/magasins.service';
import { CollectesService } from '../collectes/collectes.service';
import { BenevolesService } from '../benevoles/benevoles.service';
import { ProduitsCatalogueService } from '../produits-catalogue/produits-catalogue.service';
import { PlanningBenevoleService } from '../planning-benevole/planning-benevole.service';

describe('DashboardController', () => {
  let controller: DashboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
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

    controller = module.get<DashboardController>(DashboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
