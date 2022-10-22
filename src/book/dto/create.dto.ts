import { Pole } from "src/pole/entities/pole.entity"
import { Time } from "src/time/entities/time.entity"

export interface BookDto {
    done: boolean
    time: Time
    pole: Pole
    dateBook: Date;
    userName: string;
}