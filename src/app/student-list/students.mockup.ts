import {Student} from '../models/student';

export class Students {

  static students: Student[] = [
    new Student(1, 'Ермаков', 'Александр', 'Николаевич', new Date('1992-5-15'), 4),
    new Student(2, 'Косарев', 'Даниил', 'Сергеевич', new Date('2010-08-26'), 3),
    new Student(3, 'Шевченко', 'Иван', 'Дмитриевич', new Date('1996-07-21'), 5),
    new Student(4, 'Ларин', 'Игорь', 'Алексеевич', new Date('1996-07-21'), 2),
    new Student(5, 'Волна', 'Филипп', 'Андреевич', new Date('1996-07-21'), 3.3),
    new Student(6, 'Козырев', 'Артем', 'Михайлович', new Date('1996-07-21'), 2.5)
  ];
}
