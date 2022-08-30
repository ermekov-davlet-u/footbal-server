import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeModule } from './time/time.module';
import { PoleModule } from './pole/pole.module';
import { StatusModule } from './status/status.module';
import { PhotosModule } from './photos/photos.module';
import { TypeSportModule } from './type-sport/type-sport.module';
import { ClubModule } from './club/club.module';
import { StateModule } from './state/state.module';
import { PoleStateModule } from './pole_state/pole_state.module';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entities';
import { Time } from './time/entities/time.entity';
import { Status } from './status/entities/status.entity';
import { State } from './state/entities/state.entity';
import { Club } from './club/entities/club.entity';
import { Pole } from './pole/entities/pole.entity';
import { Photo } from './photos/entities/photo.entity';
import { PoleState } from './pole_state/entities/pole_state.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'football',
    entities: [ Book, Time, Status, State, Club, Pole, Photo, PoleState ],
    synchronize: true,
    autoLoadEntities: true,
  }), TimeModule, PoleModule, StatusModule, PhotosModule, TypeSportModule, ClubModule, StateModule, PoleStateModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
