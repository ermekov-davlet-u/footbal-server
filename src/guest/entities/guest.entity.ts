import { Column, PrimaryGeneratedColumn } from "typeorm";



export class Guest {

    @PrimaryGeneratedColumn()
    idGuest: number;

    @Column()
    fullName:string;

    @Column()
    phoneNumber:string;

    @Column()
    email: string;

    @Column()
    datebirth: Date;
    

}
