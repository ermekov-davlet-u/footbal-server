import { IsInt, Max, Min } from "class-validator";
import { Book } from "src/book/entities/book.entities";
import { Club } from "src/club/entities/club.entity";
import { Photo } from "src/photos/entities/photo.entity";
import { State } from "src/state/entities/state.entity";
import { Status } from "src/status/entities/status.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum sizePole {
    Standart = 'Стандартное',
    mini = 'Мини'
  }

@Entity()
export class Pole {

    @PrimaryGeneratedColumn() 
    idPole: number

    @Column()
    name: string

    @OneToMany( () => Photo, photo => photo.pole )
    photos: Photo[]

    @ManyToOne( () => Status, status => status.poles )
    status: Status

    @ManyToOne( () => Club, status => status.poles )
    club: Club

    @ManyToOne( () => State, state => state.poles )
    state: State

    @ManyToOne( () => Book, state => state.pole )
    books: Book[]

    @Column({
        type: "enum",
        enum: sizePole,
        default: sizePole.mini
    })
    size: sizePole

    @Column({
        type: "integer",
        default: 0,
    
    })
    @IsInt()
    @Min(0)
    @Max(10000)
    price: number
    
}
