import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubPhotoDto } from './dto/create-club-photo.dto';
import { UpdateClubPhotoDto } from './dto/update-club-photo.dto';
import { ClubPhoto } from './entities/club-photo.entity';

@Injectable()
export class ClubPhotoService {

  constructor(
    @InjectRepository(ClubPhoto) private readonly clubPhotoRepository: Repository<ClubPhoto>
  ){}

  create(createClubPhotoDto: CreateClubPhotoDto) {
    return this.clubPhotoRepository.save(createClubPhotoDto);
  }

  findAll() {
    return this.clubPhotoRepository.find();
  }

  findOne(id: number) {
    return this.clubPhotoRepository.findBy({club: {idClub: id}});
  }

  remove(id: number) {
    return this.clubPhotoRepository.delete(id);
  }
}
