import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { PoleService } from 'src/pole/pole.service';
import { PoleModule } from 'src/pole/pole.module';

@Module({
  imports: [ TypeOrmModule.forFeature([ Photo ]), PoleModule ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
