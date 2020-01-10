import {Student} from '../models/student';

export class Students {

  static students: Student[] = [
    new Student(1, 'Ермаков', 'Александр', 'Николаевич', new Date('15-05-1972'), 4),
    new Student(2, 'Косарев', 'Даниил', 'Сергеевич', new Date('15-05-2010'), 3),
    new Student(3, 'Шевченко', 'Сергей', 'Николаевич', new Date('15-05-1991'), 5)
  ];
}
