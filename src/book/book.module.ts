import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pole } from "src/pole/entities/pole.entity";
import { Time } from "src/time/entities/time.entity";
import { User } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { Book } from "./entities/book.entities";
import { BookSubscriber } from "./subscribe";


@Module({
    imports: [TypeOrmModule.forFeature([ Book, User, Time, Pole ])],
    controllers: [BookController],
    providers: [BookService, BookSubscriber, UsersService]
})
export class BookModule{}