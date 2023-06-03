import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ClassroomsController } from './classrooms/classrooms.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ClassroomsController],
  providers: [AppService],
})
export class AppModule {}
