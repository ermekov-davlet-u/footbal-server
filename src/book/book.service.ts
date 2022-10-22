import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getConnection, createQueryBuilder, Repository } from "typeorm";
import { BookDto } from "./dto/create.dto";
import { Book } from "./entities/book.entities";
import { UsersService } from './../users/users.service';



@Injectable()
export class BookService{
    userService: UsersService;
    constructor(
        @InjectRepository(Book)
        private readonly bookRepo: Repository<Book>,
        userService: UsersService
    ){
        this.userService = userService
    }

    async createNew( book: BookDto){
        const hasBook = await this.findSimilar(book)
        const userid = await this.userService.findOne(book.userName)
        if(!hasBook){
            return this.bookRepo.save({
                ...book,
                user: userid
            });
        }
        return "Поле занята"
    }

    findAll() {
        return this.bookRepo.find({
            select: {
                user: {
                    userName: true,
                    id: true,
                    }
            },
            relations: {
                pole: true,
                time: true,
                user: true
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
            select:{
                user: {
                    userName: true,
                    id: true,
                }
            }
            ,
            relations:{
                pole: true,
                time: true,
                user: true
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

    async deleteBook(id: number){
        return this.bookRepo.delete(id)
    }
    

}