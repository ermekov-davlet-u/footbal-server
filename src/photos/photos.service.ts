import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {

  constructor(
    @InjectRepository(Photo)
    private readonly bookRepo: Repository<Photo>
){}

  create(createPhotoDto: CreatePhotoDto) {

    return this.bookRepo.save(createPhotoDto);
  }

  findAll() {
    return this.bookRepo.find({});
  }

  findByPole(id: number) {
    return this.bookRepo.find({
      where: {
        pole: {
          idPole: id
        },
      },
      relations: {
        pole: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
