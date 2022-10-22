import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Book } from 'src/book/entities/book.entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, Book])],
  providers: [ UsersService],
  exports: [UsersService]
})
export class UsersModule {}