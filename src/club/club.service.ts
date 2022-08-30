import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubService {

  constructor(
    @InjectRepository(Club) 
    private readonly clubRepo: Repository<Club>
  ){}

  create(createClubDto: CreateClubDto) {
    return this.clubRepo.save(createClubDto);
  }

  findAll() {
    return this.clubRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} club`;
  }

  update(id: number, updateClubDto: UpdateClubDto) {
    return `This action updates a #${id} club`;
  }

  remove(id: number) {
    return `This action removes a #${id} club`;
  }
}
