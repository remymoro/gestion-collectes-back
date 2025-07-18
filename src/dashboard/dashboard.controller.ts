import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardStats } from './dto/dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('stats')
  getStats(): DashboardStats {
    return this.dashboardService.getStats();
  }
}
