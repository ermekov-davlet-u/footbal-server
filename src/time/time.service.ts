import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { Time } from './entities/time.entity';

@Injectable()
export class TimeService {

  constructor(
    @InjectRepository( Time )
    private readonly timeRepo: Repository<Time>
  ){}
  create(createTimeDto: CreateTimeDto) {
    return this.timeRepo.save(createTimeDto);
  }

  findAll() {
    return this.timeRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} time`;
  }

  update(id: number, updateTimeDto: UpdateTimeDto) {
    return `This action updates a #${id} time`;
  }

  remove(id: number) {
    return `This action removes a #${id} time`;
  }
}
