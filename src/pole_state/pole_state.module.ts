import { Module } from '@nestjs/common';
import { PoleStateService } from './pole_state.service';
import { PoleStateController } from './pole_state.controller';

@Module({
  controllers: [PoleStateController],
  providers: [PoleStateService]
})
export class PoleStateModule {}
