import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getClassrooms(): string {
    return this.appService.getClassrooms();
  }
}
