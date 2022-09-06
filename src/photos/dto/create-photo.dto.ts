import { Pole } from "src/pole/entities/pole.entity"

export class CreatePhotoDto {
    url: string
    desc: string
    pole: Pole
}
