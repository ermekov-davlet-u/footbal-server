import { PartialType } from '@nestjs/mapped-types';
import { CreatePoleStateDto } from './create-pole_state.dto';

export class UpdatePoleStateDto extends PartialType(CreatePoleStateDto) {}
