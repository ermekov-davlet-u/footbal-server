import { Club } from "src/club/entities/club.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClubPhoto {
    @PrimaryGeneratedColumn()
    idPhoto: number;

    @Column()
    url: string

    @Column()
    desc: string

    @ManyToOne( () => Club, club => club.photos )
    club: Club
}
