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
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClubPhotoModule } from './club-photo/club-photo.module';
import { ClubPhoto } from './club-photo/entities/club-photo.entity';
import { GuestModule } from './guest/guest.module';
import { BandModule } from './band/band.module';
import { GameResolver } from './game/game.resolver';
import { GameModule } from './game/game.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'football',
    entities: [ Book, Time, Status, State, Club, Pole, Photo, PoleState, ClubPhoto ],
    synchronize: true,
    autoLoadEntities: true,
  }), TimeModule, PoleModule, StatusModule, PhotosModule, TypeSportModule, ClubModule, StateModule, PoleStateModule, BookModule, AuthModule, UsersModule, ClubPhotoModule, GuestModule, BandModule, GameModule],
  controllers: [AppController],
  providers: [AppService, GameResolver],
})
export class AppModule {}
