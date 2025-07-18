import { Injectable, NotFoundException } from '@nestjs/common';
import { Benevole } from '../common/interfaces';
import { CreateBenevoleDto, UpdateBenevoleDto } from './dto/benevole.dto';

@Injectable()
export class BenevolesService {
  private benevoles: Benevole[] = [];
  private idCounter = 1;

  findAll(): Benevole[] {
    return this.benevoles;
  }

  findOne(id: string): Benevole {
    const benevole = this.benevoles.find(benevole => benevole.id === id);
    if (!benevole) {
      throw new NotFoundException(`Benevole with ID ${id} not found`);
    }
    return benevole;
  }

  create(createBenevoleDto: CreateBenevoleDto): Benevole {
    const newBenevole: Benevole = {
      id: this.idCounter.toString(),
      ...createBenevoleDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.idCounter++;
    this.benevoles.push(newBenevole);
    return newBenevole;
  }

  update(id: string, updateBenevoleDto: UpdateBenevoleDto): Benevole {
    const benevoleIndex = this.benevoles.findIndex(benevole => benevole.id === id);
    if (benevoleIndex === -1) {
      throw new NotFoundException(`Benevole with ID ${id} not found`);
    }
    
    this.benevoles[benevoleIndex] = {
      ...this.benevoles[benevoleIndex],
      ...updateBenevoleDto,
      updatedAt: new Date(),
    };
    
    return this.benevoles[benevoleIndex];
  }

  remove(id: string): void {
    const benevoleIndex = this.benevoles.findIndex(benevole => benevole.id === id);
    if (benevoleIndex === -1) {
      throw new NotFoundException(`Benevole with ID ${id} not found`);
    }
    this.benevoles.splice(benevoleIndex, 1);
  }

  findAvailable(): Benevole[] {
    return this.benevoles.filter(benevole => benevole.isAvailable);
  }

  findByUserId(userId: string): Benevole | undefined {
    return this.benevoles.find(benevole => benevole.userId === userId);
  }
}
