import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/create.dto";



@Controller("book")
export class BookController{

    constructor(private readonly bookService: BookService){}
    

    @Post()
    createNew(@Body() body: BookDto){
        return this.bookService.createNew(body)
    }

    @Get(":id" )
    getBookByPole(@Param("id") id : number){
        return this.bookService.findByPole(id);
    }

    @Get()
    getAllBook(){
        return this.bookService.findAll();
    }

    @Delete(":id")
    deleteAllBook(@Param("id") id: number){
        return this.bookService.deleteBook(id);
    }

}