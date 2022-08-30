import { Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class PoleState {

    @PrimaryGeneratedColumn()
    idPS: number;

    

}
