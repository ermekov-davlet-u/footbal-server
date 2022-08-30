import { Pole } from "src/pole/entities/pole.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class State {

    @PrimaryGeneratedColumn()
    idState: number;

    @Column()
    stateName: string;

    @Column()
    stateDesc: string;

    @OneToMany( () => Pole, pole => pole.state)
    poles: Pole[];

}
