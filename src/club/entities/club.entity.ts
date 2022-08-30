import { Pole } from "src/pole/entities/pole.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Club {

    @PrimaryGeneratedColumn()
    idClub: number

    @Column()
    clubName: string

    @Column()
    adres: string

    @OneToMany( () => Pole, pole => pole.club)
    @JoinColumn()
    poles: Pole

}
