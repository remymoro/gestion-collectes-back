import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Magasin } from './entities/magasin.entity';
import { Centre } from '../centres/entities/centre.entity';
import { CreateMagasinDto } from './dto/create-magasin.dto';
import { UpdateMagasinDto } from './dto/update-magasin.dto';

@Injectable()
export class MagasinsService {
  constructor(
    @InjectRepository(Magasin)
    private magasinsRepository: Repository<Magasin>,
    @InjectRepository(Centre)
    private centresRepository: Repository<Centre>,
  ) {}

  async create(createMagasinDto: CreateMagasinDto): Promise<Magasin> {
    const centre = await this.centresRepository.findOne({ where: { id: createMagasinDto.centreId } });
    if (!centre) {
      throw new NotFoundException(`Centre avec l'id ${createMagasinDto.centreId} non trouvé`);
    }
    const magasin = this.magasinsRepository.create({
      ...createMagasinDto,
      centre,
    });
    return this.magasinsRepository.save(magasin);
  }

  async findAll(): Promise<Magasin[]> {
    return this.magasinsRepository.find({ relations: ['centre'] });
  }

  async findOne(id: number): Promise<Magasin> {
    const magasin = await this.magasinsRepository.findOne({ where: { id }, relations: ['centre'] });
    if (!magasin) {
      throw new NotFoundException(`Magasin avec l'id ${id} non trouvé`);
    }
    return magasin;
  }

  async update(id: number, updateMagasinDto: UpdateMagasinDto): Promise<Magasin> {
    const magasin = await this.magasinsRepository.findOne({ where: { id }, relations: ['centre'] });
    if (!magasin) {
      throw new NotFoundException(`Magasin avec l'id ${id} non trouvé`);
    }
    if (updateMagasinDto.centreId) {
      const centre = await this.centresRepository.findOne({ where: { id: updateMagasinDto.centreId } });
      if (!centre) {
        throw new NotFoundException(`Centre avec l'id ${updateMagasinDto.centreId} non trouvé`);
      }
      magasin.centre = centre;
    }
    Object.assign(magasin, updateMagasinDto);
    return this.magasinsRepository.save(magasin);
  }

  async remove(id: number): Promise<void> {
    const result = await this.magasinsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Magasin avec l'id ${id} non trouvé`);
    }
  }
}
