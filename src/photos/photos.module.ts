import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { PoleService } from 'src/pole/pole.service';
import { PoleModule } from 'src/pole/pole.module';
import { Pole } from 'src/pole/entities/pole.entity';
import { Club } from 'src/club/entities/club.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Photo, Pole, Club ]), PoleModule ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
