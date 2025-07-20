import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CollectesModule } from './collectes/collectes.module';
import { CentresModule } from './centres/centres.module';
import { MagasinsModule } from './magasins/magasins.module';
import { ProduitsCollectesModule } from './produits-collectes/produits-collectes.module';
import { ProduitsCatalogueModule } from './produits-catalogue/produits-catalogue.module';
import { BenevolesModule } from './benevoles/benevoles.module';
import { PlanningBenevoleModule } from './planning-benevole/planning-benevole.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Charge .env automatiquement
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true, // désactive en prod !
      }),
    }),
    UsersModule,
    CollectesModule,
    CentresModule,
    MagasinsModule,
    ProduitsCollectesModule,
    ProduitsCatalogueModule,
    BenevolesModule,
    PlanningBenevoleModule,
    DashboardModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}