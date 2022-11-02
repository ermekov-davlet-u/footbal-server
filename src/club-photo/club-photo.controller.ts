import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query, Inject, UploadedFiles, HttpStatus, Res } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ClubPhotoService } from './club-photo.service';
import { CreateClubPhotoDto } from './dto/create-club-photo.dto';
import { UpdateClubPhotoDto } from './dto/update-club-photo.dto';
import { ClubService } from './../club/club.service';

@Controller('club-photo')
export class ClubPhotoController {
  constructor(
    private readonly clubPhotoService: ClubPhotoService,
    private readonly clubService: ClubService
  ) {}
  
  // @Inject(ClubService) 
  // private readonly clubService: ClubService

  @Post()
  create(@Body() createClubPhotoDto: CreateClubPhotoDto) {
    return this.clubPhotoService.create(createClubPhotoDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './club',
      filename: (req, file, callback) => {
        const name = file.originalname.split('.')[0];  
        const fileExtName = extname(file.originalname);
        const randomName = Array(4)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('-');
        callback(null, `${name}-${randomName}${fileExtName}`);
      }
    }),
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Query("b") b: number) {

    const club = await this.clubService.findOne(b)

    const createPhotoDto: CreateClubPhotoDto = {
      url: file.filename,
      desc: "",
      club: club
    }
    return this.clubPhotoService.create(createPhotoDto);
  }

  @Post('photos')
  @UseInterceptors(
    FilesInterceptor('file', 10, {
      storage: diskStorage({
        destination: './club',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];  
          const fileExtName = extname(file.originalname);
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('-');
          callback(null, `${name}-${randomName}${fileExtName}`);
        },
      }),
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files, @Query("b") b: number) {
    const response = [];
    const club = await this.clubService.findOne(b)
    files.forEach(file => {
      const fileReponse = {
        url: file.filename,
        desc: "",
        club: club
      };
      this.clubPhotoService.create({
        url: file.filename,
        desc: "",
        club: club
      })
      response.push(fileReponse);
    });
    return {
      status: HttpStatus.OK,
      message: 'Images uploaded successfully!',
      data: response,
    };
  }

  @Get('get/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    if(!image) return ""
    return res.sendFile(image, { root: './club' });
  }

  @Get()
  findAll() {
    return this.clubPhotoService.findAll();
  }

  @Get(':idClub')
  findOne(@Param('idClub') idClub: string) {
    return this.clubPhotoService.findOne(+idClub);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubPhotoService.remove(+id);
  }
}
