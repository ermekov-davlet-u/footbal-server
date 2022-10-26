import { Club } from "src/club/entities/club.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class TypeSport {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeName: string;

    @Column()
    typeDesc: string;

    @OneToMany(() => Club, club => club.typeSport)
    club: Club[];

}
