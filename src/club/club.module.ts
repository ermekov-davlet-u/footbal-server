import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { TypeSport } from 'src/type-sport/entities/type-sport.entity';
import { ClubPhoto } from 'src/club-photo/entities/club-photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature( [ Club, TypeSport, ClubPhoto ] )],
  controllers: [ClubController],
  providers: [ClubService],
  exports: [ClubService]
})
export class ClubModule {}
