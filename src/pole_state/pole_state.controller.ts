import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoleStateService } from './pole_state.service';
import { CreatePoleStateDto } from './dto/create-pole_state.dto';
import { UpdatePoleStateDto } from './dto/update-pole_state.dto';

@Controller('pole-state')
export class PoleStateController {
  constructor(private readonly poleStateService: PoleStateService) {}

  @Post()
  create(@Body() createPoleStateDto: CreatePoleStateDto) {
    return this.poleStateService.create(createPoleStateDto);
  }

  @Get()
  findAll() {
    return this.poleStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poleStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoleStateDto: UpdatePoleStateDto) {
    return this.poleStateService.update(+id, updatePoleStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poleStateService.remove(+id);
  }
}
