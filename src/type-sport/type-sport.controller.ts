import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeSportService } from './type-sport.service';
import { CreateTypeSportDto } from './dto/create-type-sport.dto';
import { UpdateTypeSportDto } from './dto/update-type-sport.dto';

@Controller('type-sport')
export class TypeSportController {
  constructor(private readonly typeSportService: TypeSportService) {}

  @Post()
  create(@Body() createTypeSportDto: CreateTypeSportDto) {
    return this.typeSportService.create(createTypeSportDto);
  }

  @Get()
  findAll() {
    return this.typeSportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeSportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeSportDto: UpdateTypeSportDto) {
    return this.typeSportService.update(+id, updateTypeSportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeSportService.remove(+id);
  }
}
