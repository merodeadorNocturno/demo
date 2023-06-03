import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Classrooms } from 'src/types';

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getClassrooms(): Classrooms {
    return this.appService.getClassrooms();
  }
}
