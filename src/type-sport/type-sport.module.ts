import { Module } from '@nestjs/common';
import { TypeSportService } from './type-sport.service';
import { TypeSportController } from './type-sport.controller';

@Module({
  controllers: [TypeSportController],
  providers: [TypeSportService]
})
export class TypeSportModule {}
