import { Module } from '@nestjs/common';
import { ClubPhotoService } from './club-photo.service';
import { ClubPhotoController } from './club-photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubPhoto } from './entities/club-photo.entity';
import { ClubService } from 'src/club/club.service';
import { Club } from 'src/club/entities/club.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ClubPhoto, Club]) ],
  controllers: [ClubPhotoController],
  providers: [ClubPhotoService, ClubService]
})
export class ClubPhotoModule {}
