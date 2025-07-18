import { Injectable, NotFoundException } from '@nestjs/common';
import { Collecte } from '../common/interfaces';
import { CreateCollecteDto, UpdateCollecteDto } from './dto/collecte.dto';

@Injectable()
export class CollectesService {
  private collectes: Collecte[] = [];
  private idCounter = 1;

  findAll(): Collecte[] {
    return this.collectes;
  }

  findOne(id: string): Collecte {
    const collecte = this.collectes.find(collecte => collecte.id === id);
    if (!collecte) {
      throw new NotFoundException(`Collecte with ID ${id} not found`);
    }
    return collecte;
  }

  create(createCollecteDto: CreateCollecteDto): Collecte {
    const newCollecte: Collecte = {
      id: this.idCounter.toString(),
      ...createCollecteDto,
      startDate: new Date(createCollecteDto.startDate),
      endDate: new Date(createCollecteDto.endDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.idCounter++;
    this.collectes.push(newCollecte);
    return newCollecte;
  }

  update(id: string, updateCollecteDto: UpdateCollecteDto): Collecte {
    const collecteIndex = this.collectes.findIndex(collecte => collecte.id === id);
    if (collecteIndex === -1) {
      throw new NotFoundException(`Collecte with ID ${id} not found`);
    }
    
    const updatedData: any = { ...updateCollecteDto };
    if (updateCollecteDto.startDate) {
      updatedData.startDate = new Date(updateCollecteDto.startDate);
    }
    if (updateCollecteDto.endDate) {
      updatedData.endDate = new Date(updateCollecteDto.endDate);
    }
    
    this.collectes[collecteIndex] = {
      ...this.collectes[collecteIndex],
      ...updatedData,
      updatedAt: new Date(),
    };
    
    return this.collectes[collecteIndex];
  }

  remove(id: string): void {
    const collecteIndex = this.collectes.findIndex(collecte => collecte.id === id);
    if (collecteIndex === -1) {
      throw new NotFoundException(`Collecte with ID ${id} not found`);
    }
    this.collectes.splice(collecteIndex, 1);
  }

  findByStatus(status: string): Collecte[] {
    return this.collectes.filter(collecte => collecte.status === status);
  }

  findByCentre(centreId: string): Collecte[] {
    return this.collectes.filter(collecte => collecte.centreId === centreId);
  }
}
