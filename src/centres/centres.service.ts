import { Injectable, NotFoundException } from '@nestjs/common';
import { Centre } from '../common/interfaces';
import { CreateCentreDto, UpdateCentreDto } from './dto/centre.dto';

@Injectable()
export class CentresService {
  private centres: Centre[] = [];
  private idCounter = 1;

  findAll(): Centre[] {
    return this.centres;
  }

  findOne(id: string): Centre {
    const centre = this.centres.find(centre => centre.id === id);
    if (!centre) {
      throw new NotFoundException(`Centre with ID ${id} not found`);
    }
    return centre;
  }

  create(createCentreDto: CreateCentreDto): Centre {
    const newCentre: Centre = {
      id: this.idCounter.toString(),
      ...createCentreDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.idCounter++;
    this.centres.push(newCentre);
    return newCentre;
  }

  update(id: string, updateCentreDto: UpdateCentreDto): Centre {
    const centreIndex = this.centres.findIndex(centre => centre.id === id);
    if (centreIndex === -1) {
      throw new NotFoundException(`Centre with ID ${id} not found`);
    }
    
    this.centres[centreIndex] = {
      ...this.centres[centreIndex],
      ...updateCentreDto,
      updatedAt: new Date(),
    };
    
    return this.centres[centreIndex];
  }

  remove(id: string): void {
    const centreIndex = this.centres.findIndex(centre => centre.id === id);
    if (centreIndex === -1) {
      throw new NotFoundException(`Centre with ID ${id} not found`);
    }
    this.centres.splice(centreIndex, 1);
  }
}
