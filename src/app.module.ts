import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CollectesModule } from './collectes/collectes.module';
import { CentresModule } from './centres/centres.module';
import { MagasinsModule } from './magasins/magasins.module';
import { ProduitsCollectesModule } from './produits-collectes/produits-collectes.module';
import { ProduitsCatalogueModule } from './produits-catalogue/produits-catalogue.module';
import { BenevolesModule } from './benevoles/benevoles.module';
import { PlanningBenevoleModule } from './planning-benevole/planning-benevole.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [UsersModule, CollectesModule, CentresModule, MagasinsModule, ProduitsCollectesModule, ProduitsCatalogueModule, BenevolesModule, PlanningBenevoleModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
