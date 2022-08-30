import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pole } from './../../pole/entities/pole.entity';



@Entity() 
export class Status {

    @PrimaryGeneratedColumn()
    idStatus: number;

    @Column()
    status: string;

    @Column({
        nullable: true
    })
    statusDesc: string;

    @OneToMany( () => Pole, pole => pole.status )
    poles: Pole[]
}
