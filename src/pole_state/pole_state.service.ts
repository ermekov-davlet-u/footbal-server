import { Injectable } from '@nestjs/common';
import { CreatePoleStateDto } from './dto/create-pole_state.dto';
import { UpdatePoleStateDto } from './dto/update-pole_state.dto';

@Injectable()
export class PoleStateService {
  create(createPoleStateDto: CreatePoleStateDto) {
    return 'This action adds a new poleState';
  }

  findAll() {
    return `This action returns all poleState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poleState`;
  }

  update(id: number, updatePoleStateDto: UpdatePoleStateDto) {
    return `This action updates a #${id} poleState`;
  }

  remove(id: number) {
    return `This action removes a #${id} poleState`;
  }
}
