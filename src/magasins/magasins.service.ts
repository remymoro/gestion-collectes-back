import { Injectable, NotFoundException } from '@nestjs/common';
import { Magasin } from '../common/interfaces';
import { CreateMagasinDto, UpdateMagasinDto } from './dto/magasin.dto';

@Injectable()
export class MagasinsService {
  private magasins: Magasin[] = [];
  private idCounter = 1;

  findAll(): Magasin[] {
    return this.magasins;
  }

  findOne(id: string): Magasin {
    const magasin = this.magasins.find(magasin => magasin.id === id);
    if (!magasin) {
      throw new NotFoundException(`Magasin with ID ${id} not found`);
    }
    return magasin;
  }

  create(createMagasinDto: CreateMagasinDto): Magasin {
    const newMagasin: Magasin = {
      id: this.idCounter.toString(),
      ...createMagasinDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.idCounter++;
    this.magasins.push(newMagasin);
    return newMagasin;
  }

  update(id: string, updateMagasinDto: UpdateMagasinDto): Magasin {
    const magasinIndex = this.magasins.findIndex(magasin => magasin.id === id);
    if (magasinIndex === -1) {
      throw new NotFoundException(`Magasin with ID ${id} not found`);
    }
    
    this.magasins[magasinIndex] = {
      ...this.magasins[magasinIndex],
      ...updateMagasinDto,
      updatedAt: new Date(),
    };
    
    return this.magasins[magasinIndex];
  }

  remove(id: string): void {
    const magasinIndex = this.magasins.findIndex(magasin => magasin.id === id);
    if (magasinIndex === -1) {
      throw new NotFoundException(`Magasin with ID ${id} not found`);
    }
    this.magasins.splice(magasinIndex, 1);
  }
}
