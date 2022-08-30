import { Body, Controller, Get, Post } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/create.dto";



@Controller("book")
export class BookController{

    constructor(private readonly bookService: BookService){}
    

    @Post()
    createNew(@Body() body: BookDto){
        return this.bookService.createNew(body)
    }

    @Get()
    getAllBook(){
        return this.bookService.findAll();
    }

}