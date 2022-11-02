import { PartialType } from '@nestjs/mapped-types';
import { CreateClubPhotoDto } from './create-club-photo.dto';

export class UpdateClubPhotoDto extends PartialType(CreateClubPhotoDto) {}
