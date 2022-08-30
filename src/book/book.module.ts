import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { Book } from "./entities/book.entities";
import { BookSubscriber } from "./subscribe";


@Module({
    imports: [TypeOrmModule.forFeature([ Book ])],
    controllers: [BookController],
    providers: [BookService, BookSubscriber]
})
export class BookModule{}