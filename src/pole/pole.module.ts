import { Module } from '@nestjs/common';
import { PoleService } from './pole.service';
import { PoleController } from './pole.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pole } from './entities/pole.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Pole ]) ],
  controllers: [PoleController],
  providers: [PoleService],
  exports: [PoleService]
})
export class PoleModule {}
