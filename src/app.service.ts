import { Injectable } from '@nestjs/common';
import { Classrooms, Users, Gender } from './types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Users {
    return {
      id: '1e67cfc8-8486-45be-aed3-e3f13c4c8433',
      name: 'M',
      lastName: 'Arroyo',
      userName: 'm11arroyo',
      age: 18,
      email: 'm11_arroyo@gmail.com',
      deleted: false,
      gender: Gender.Female,
    };
  }

  getClassrooms(): Classrooms {
    return {
      id: '83171278-d973-461c-a663-782c202cf264',
      name: 'Casio',
      description: 'Celvanio 470BK',
    };
  }
}
