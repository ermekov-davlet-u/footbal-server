import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query, Inject, Res } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Pole } from 'src/pole/entities/pole.entity';
import { PoleService } from 'src/pole/pole.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService
    ) {}
    @Inject(PoleService)
    private readonly poleService: PoleService

  @Post()
  create(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photosService.create(createPhotoDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './pole',
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

    const pole = await this.poleService.findOne(b)

    const createPhotoDto: CreatePhotoDto = {
      url: file.filename,
      desc: "",
      pole: pole
    }
    return this.photosService.create(createPhotoDto);
  }

  @Get()
  findAll() {
    return this.photosService.findAll();
  }
  @Get('get/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './pole' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosService.findByPole(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photosService.update(+id, updatePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
