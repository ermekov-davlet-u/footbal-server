import { Club } from "src/club/entities/club.entity"
import { State } from "src/state/entities/state.entity"
import { Status } from "src/status/entities/status.entity"
import { sizePole } from "../entities/pole.entity"

export class CreatePoleDto {

    name: string
    status: Status
    club: Club
    state: State
    size: sizePole
    price: number
}
