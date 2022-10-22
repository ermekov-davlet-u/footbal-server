import { Pole } from "src/pole/entities/pole.entity";
import { Time } from "src/time/entities/time.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Book{

    @PrimaryGeneratedColumn()
    idBook: number;

    @Column()
    done: boolean

    @ManyToOne( () => Time, time => time.books )
    @JoinColumn()
    time: Time

    @ManyToOne( () => Pole, pole => pole.books )
    @JoinColumn()
    pole: Pole

    @Column({
        type: "date",
    })
    dateBook: Date

    @ManyToOne( () => User, user => user.book )
    @JoinColumn()
    user: User
}