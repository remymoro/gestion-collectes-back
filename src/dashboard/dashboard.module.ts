import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { UsersModule } from '../users/users.module';
import { CentresModule } from '../centres/centres.module';
import { MagasinsModule } from '../magasins/magasins.module';
import { CollectesModule } from '../collectes/collectes.module';
import { BenevolesModule } from '../benevoles/benevoles.module';
import { ProduitsCatalogueModule } from '../produits-catalogue/produits-catalogue.module';
import { PlanningBenevoleModule } from '../planning-benevole/planning-benevole.module';

@Module({
  imports: [
    UsersModule,
    CentresModule,
    MagasinsModule,
    CollectesModule,
    BenevolesModule,
    ProduitsCatalogueModule,
    PlanningBenevoleModule,
  ],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
