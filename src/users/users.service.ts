import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Centre } from '../centres/entities/centre.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Centre)
    private centresRepository: Repository<Centre>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existing = await this.usersRepository.findOne({ where: { username: createUserDto.username } });
    if (existing) {
      throw new ConflictException(`Le nom d'utilisateur "${createUserDto.username}" est déjà pris.`);
    }
    // On ne met centre que s'il existe, sinon on ne met pas la propriété
    const userData: Partial<User> = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    if (createUserDto.centreId) {
      const centre = await this.centresRepository.findOne({ where: { id: createUserDto.centreId } });
      if (!centre) throw new NotFoundException(`Centre avec l'id ${createUserDto.centreId} non trouvé`);
      userData.centre = centre;
    } else {
      // On ne met pas centre du tout si centreId n'est pas fourni
      delete userData.centre;
    }
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Utilisateur avec l'id ${id} non trouvé`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Utilisateur avec l'id ${id} non trouvé`);
    }
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    // On ne modifie le centre que si centreId est défini et non nul
    if (updateUserDto.centreId !== undefined && updateUserDto.centreId !== null) {
      const centre = await this.centresRepository.findOne({ where: { id: updateUserDto.centreId } });
      if (!centre) throw new NotFoundException(`Centre avec l'id ${updateUserDto.centreId} non trouvé`);
      user.centre = centre;
    }
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Utilisateur avec l'id ${id} non trouvé`);
    }
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }
}
