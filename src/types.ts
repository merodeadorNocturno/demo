export enum Gender {
  Male = 'male',
  Female = 'female',
  NonBinary = 'non-binary',
  Transgender = 'transgender',
}

export interface Users {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  age: number;
  email: string;
  deleted: boolean;
  gender: Gender;
  addres?: string;
  phone?: string;
  description?: string;
}

export interface Classrooms {
  id: string;
  name: string;
  description?: string;
}
