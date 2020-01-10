export class Student {
  id: number;
  surname: string;
  name: string;
  patronymic: string;
  birthday: Date;
  averageMark: number;

  constructor(id: number,
              surname: string,
              name: string,
              patronymic: string,
              birthday: Date,
              averageMark: number) {
  this.id = id;
  this.surname = surname;
  this.name = name;
  this.patronymic = patronymic;
  this.birthday = birthday;
  this.averageMark = averageMark;
  }
}
