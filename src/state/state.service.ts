import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity';

@Injectable()
export class StateService {
  
  constructor(
    @InjectRepository( State )
    private readonly stateRepo: Repository<State>
  ){}

  create(createStateDto: CreateStateDto) {
    return this.stateRepo.save(createStateDto);
  }

  findAll() {
    return this.stateRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
}
