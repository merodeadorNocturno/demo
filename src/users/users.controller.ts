import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Users } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): Users {
    return this.appService.getUsers();
  }
}
