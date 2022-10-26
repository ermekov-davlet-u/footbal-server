import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { BookService } from "./book.service";
import { Book } from "./entities/book.entities";


@EventSubscriber()
export class BookSubscriber implements EntitySubscriberInterface<Book> {
  constructor(dataSource: DataSource, private readonly bookService: BookService) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Book;
  }

  async beforeInsert(event: InsertEvent<Book>) {
    // const book = await this.bookService.findSimilar(event.entity)
    // console.log(event.connection)
    // return book
    // console.log(`BEFORE Book INSERTED: ` );
  }

  beforeUpdate(event: UpdateEvent<Book>) {
    // console.log(`BEFORE Book INSERTED: `, event.entity);
  }
}