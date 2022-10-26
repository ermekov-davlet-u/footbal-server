import { Module } from '@nestjs/common';
import { TypeSportService } from './type-sport.service';
import { TypeSportController } from './type-sport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeSport } from './entities/type-sport.entity';
import { Club } from 'src/club/entities/club.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TypeSport, Club])],
  controllers: [TypeSportController],
  providers: [TypeSportService]
})
export class TypeSportModule {}
