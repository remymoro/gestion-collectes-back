import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CentresService } from '../centres/centres.service';
import { MagasinsService } from '../magasins/magasins.service';
import { CollectesService } from '../collectes/collectes.service';
import { BenevolesService } from '../benevoles/benevoles.service';
import { ProduitsCatalogueService } from '../produits-catalogue/produits-catalogue.service';
import { PlanningBenevoleService } from '../planning-benevole/planning-benevole.service';
import { DashboardStats } from './dto/dashboard.dto';
import { CollecteStatus } from '../common/interfaces';

@Injectable()
export class DashboardService {
  constructor(
    private readonly usersService: UsersService,
    private readonly centresService: CentresService,
    private readonly magasinsService: MagasinsService,
    private readonly collectesService: CollectesService,
    private readonly benevolesService: BenevolesService,
    private readonly produitsService: ProduitsCatalogueService,
    private readonly planningService: PlanningBenevoleService,
  ) {}

  getStats(): DashboardStats {
    const users = this.usersService.findAll();
    const centres = this.centresService.findAll();
    const magasins = this.magasinsService.findAll();
    const collectes = this.collectesService.findAll();
    const benevoles = this.benevolesService.findAll();
    const produits = this.produitsService.findAll();
    const plannings = this.planningService.findAll();

    const activeCollectes = collectes.filter(c => c.status === CollecteStatus.ACTIVE);
    const availableBenevoles = benevoles.filter(b => b.isAvailable);
    
    // Get recent collectes (last 5)
    const recentCollectes = collectes
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5)
      .map(c => ({
        id: c.id,
        name: c.name,
        status: c.status,
        createdAt: c.createdAt,
      }));

    // Get upcoming plannings (next 5)
    const upcomingPlannings = plannings
      .filter(p => p.assignedDate >= new Date())
      .sort((a, b) => a.assignedDate.getTime() - b.assignedDate.getTime())
      .slice(0, 5)
      .map(p => ({
        id: p.id,
        assignedDate: p.assignedDate,
        startTime: p.startTime,
        endTime: p.endTime,
        role: p.role,
        status: p.status,
      }));

    return {
      totalUsers: users.length,
      totalCentres: centres.length,
      totalMagasins: magasins.length,
      totalCollectes: collectes.length,
      activeCollectes: activeCollectes.length,
      totalBenevoles: benevoles.length,
      availableBenevoles: availableBenevoles.length,
      totalProduits: produits.length,
      recentCollectes,
      upcomingPlannings,
    };
  }
}
