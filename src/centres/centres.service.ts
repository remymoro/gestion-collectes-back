import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Centre } from './entities/centre.entity';
import { CreateCentreDto } from './dto/create-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';

@Injectable()
export class CentresService {
  constructor(
    @InjectRepository(Centre)
    private centresRepository: Repository<Centre>,
  ) {}

  async create(createCentreDto: CreateCentreDto): Promise<Centre> {
    const centre = this.centresRepository.create(createCentreDto);
    return this.centresRepository.save(centre);
  }

  async findAll(): Promise<Centre[]> {
    return this.centresRepository.find();
  }

  async findOne(id: number): Promise<Centre> {
    const centre = await this.centresRepository.findOne({ where: { id } });
    if (!centre) {
      throw new NotFoundException(`Centre avec l'id ${id} non trouvé`);
    }
    return centre;
  }

  async update(id: number, updateCentreDto: UpdateCentreDto): Promise<Centre> {
    const centre = await this.centresRepository.findOne({ where: { id } });
    if (!centre) {
      throw new NotFoundException(`Centre avec l'id ${id} non trouvé`);
    }
    Object.assign(centre, updateCentreDto);
    return this.centresRepository.save(centre);
  }

  async remove(id: number): Promise<void> {
    const result = await this.centresRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Centre avec l'id ${id} non trouvé`);
    }
  }
}
