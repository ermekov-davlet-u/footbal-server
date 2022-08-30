import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePoleDto } from './dto/create-pole.dto';
import { UpdatePoleDto } from './dto/update-pole.dto';
import { Pole } from './entities/pole.entity';

@Injectable()
export class PoleService {
  constructor(
    @InjectRepository(Pole)
    private readonly poleRepo: Repository<Pole>
  ){}

  create(createPoleDto: CreatePoleDto) {
    return this.poleRepo.save(createPoleDto) ;
  }

  findAll() {
    return this.poleRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pole`;
  }

  update(id: number, updatePoleDto: UpdatePoleDto) {
    return `This action updates a #${id} pole`;
  }

  remove(id: number) {
    return `This action removes a #${id} pole`;
  }
}
