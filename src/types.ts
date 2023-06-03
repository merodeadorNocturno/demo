export interface Users {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  age: number;
  email: string;
  deleted: boolean;
  addres?: string;
  phone?: string;
  description?: string;
}

export interface Classrooms {
  id: string;
  name: string;
  description?: string;
}
