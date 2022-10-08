import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getConnection, createQueryBuilder, Repository } from "typeorm";
import { BookDto } from "./dto/create.dto";
import { Book } from "./entities/book.entities";



@Injectable()
export class BookService{


    constructor(
        @InjectRepository(Book)
        private readonly bookRepo: Repository<Book>
    ){}

    async createNew( book: BookDto){
        const hasBook = await this.findSimilar(book)
        console.log(hasBook);
        
        if(!hasBook){
            return this.bookRepo.save(book);
        }
        return "Поле занята"
    }

    findAll() {
        return this.bookRepo.find({
            relations: {
                pole: true,
                time: true
            }
        })
    }

    async findByPole( id: number) {
        return this.bookRepo.find({
            where: {
                pole: {
                    idPole: id
                }
            },
            relations:{
                pole: true,
                time: true
            }
        })
    }

    async findSimilar(book: BookDto) {
        return this.bookRepo.count({
            where: {
                time: {
                    idTime: Number(book.time)
                },
                pole: {
                    idPole: Number(book.pole)
                },
                dateBook: book.dateBook
            },
            relations: {
                pole: true,
                time: true
            }
        })
    }
    

}