import { Injectable } from '@nestjs/common';
import { CreateTypeSportDto } from './dto/create-type-sport.dto';
import { UpdateTypeSportDto } from './dto/update-type-sport.dto';

@Injectable()
export class TypeSportService {
  create(createTypeSportDto: CreateTypeSportDto) {
    return 'This action adds a new typeSport';
  }

  findAll() {
    return `This action returns all typeSport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeSport`;
  }

  update(id: number, updateTypeSportDto: UpdateTypeSportDto) {
    return `This action updates a #${id} typeSport`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeSport`;
  }
}
