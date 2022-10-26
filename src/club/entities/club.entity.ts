import { Pole } from "src/pole/entities/pole.entity";
import { TypeSport } from "src/type-sport/entities/type-sport.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Club {

    @PrimaryGeneratedColumn()
    idClub: number

    @Column()
    clubName: string;

    @Column()
    adres: string;

    @Column({
        default: `Our team was inspired by the seven skills of highly effective programmers created by the TechLead. 
        We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...`
    })
    desc: string;
    

    @Column({
        default: true
    })
    isActive: boolean

    @OneToMany( () => Pole, pole => pole.club)
    @JoinColumn()
    poles: Pole

    @ManyToOne(() => TypeSport, typeSport => typeSport.club)
    typeSport: TypeSport

}
