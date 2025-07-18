import { Injectable, NotFoundException } from '@nestjs/common';
import { PlanningBenevole } from '../common/interfaces';
import { CreatePlanningBenevoleDto, UpdatePlanningBenevoleDto } from './dto/planning-benevole.dto';

@Injectable()
export class PlanningBenevoleService {
  private plannings: PlanningBenevole[] = [];
  private idCounter = 1;

  findAll(): PlanningBenevole[] {
    return this.plannings;
  }

  findOne(id: string): PlanningBenevole {
    const planning = this.plannings.find(planning => planning.id === id);
    if (!planning) {
      throw new NotFoundException(`Planning with ID ${id} not found`);
    }
    return planning;
  }

  create(createPlanningDto: CreatePlanningBenevoleDto): PlanningBenevole {
    const newPlanning: PlanningBenevole = {
      id: this.idCounter.toString(),
      ...createPlanningDto,
      assignedDate: new Date(createPlanningDto.assignedDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.idCounter++;
    this.plannings.push(newPlanning);
    return newPlanning;
  }

  update(id: string, updatePlanningDto: UpdatePlanningBenevoleDto): PlanningBenevole {
    const planningIndex = this.plannings.findIndex(planning => planning.id === id);
    if (planningIndex === -1) {
      throw new NotFoundException(`Planning with ID ${id} not found`);
    }
    
    const updatedData: any = { ...updatePlanningDto };
    if (updatePlanningDto.assignedDate) {
      updatedData.assignedDate = new Date(updatePlanningDto.assignedDate);
    }
    
    this.plannings[planningIndex] = {
      ...this.plannings[planningIndex],
      ...updatedData,
      updatedAt: new Date(),
    };
    
    return this.plannings[planningIndex];
  }

  remove(id: string): void {
    const planningIndex = this.plannings.findIndex(planning => planning.id === id);
    if (planningIndex === -1) {
      throw new NotFoundException(`Planning with ID ${id} not found`);
    }
    this.plannings.splice(planningIndex, 1);
  }

  findByBenevole(benevoleId: string): PlanningBenevole[] {
    return this.plannings.filter(planning => planning.benevoleId === benevoleId);
  }

  findByCollecte(collecteId: string): PlanningBenevole[] {
    return this.plannings.filter(planning => planning.collecteId === collecteId);
  }

  findByStatus(status: string): PlanningBenevole[] {
    return this.plannings.filter(planning => planning.status === status);
  }
}
