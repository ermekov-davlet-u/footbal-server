import { Pole } from "src/pole/entities/pole.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    idPhoto: number;

    @Column()
    url: string

    @Column()
    desc: string

    @ManyToOne( () => Pole, pole => pole.photos )
    pole: Pole
    

}
