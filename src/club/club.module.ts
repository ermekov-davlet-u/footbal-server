import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { TypeSport } from 'src/type-sport/entities/type-sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature( [ Club, TypeSport ] )],
  controllers: [ClubController],
  providers: [ClubService]
})
export class ClubModule {}
