import { Injectable } from '@nestjs/common';
import { Users } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Users {
    return {
      name: 'M',
      lastName: 'Arroyo',
      userName: 'm11arroyo',
      age: 18,
      email: 'm11_arroyo@gmail.com',
      deleted: false,
    };
  }

  getClassrooms(): string {
    return 'All Classrooms';
  }
}
