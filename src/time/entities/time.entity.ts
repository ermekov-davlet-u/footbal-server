import { Book } from "src/book/entities/book.entities";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Time {

    @PrimaryGeneratedColumn()
    idTime: number

    @Column()
    timeName: string

    @OneToMany( () => Book, book => book.time)
    books: Book[]

}
