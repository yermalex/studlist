import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Student} from '../models/student';
import { Students} from './students.mockup';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less']
})
export class StudentListComponent implements OnInit {

  public students: Student[] = [];
  isBadGrade = false;
  inputValue = '';
  markForFiltering: number;
  dateForFiltering: Date;
  descending = false;
  ascending = false;
  fieldName = '';

  constructor() {
  }

  ngOnInit() {
    console.log('oninit');
    this.students = Students.students; // .sort(() => {
      // return 0.5 - Math.random();
    // });
  }

  toggleBadGrade(): void {
    this.isBadGrade = !this.isBadGrade;
  }

  findStud(student: Student): boolean {
    if (!this.inputValue.trim()) {
      return false;
    }
    if (student.surname.toLocaleLowerCase().includes(this.inputValue.toLowerCase())
    || student.name.toLocaleLowerCase().includes(this.inputValue.toLowerCase())
    || student.patronymic.toLocaleLowerCase().includes(this.inputValue.toLowerCase())) {
      return true;
    }
  }

  removeStud(id: number): void {
    Students.students = Students.students.filter(student => student.id !== id);
    this.students = Students.students;
    console.log(Students.students);
  }

  sortStud(sortUsing: string, isIncreasing: boolean): void {
    if (sortUsing === 'birthday') {
      this.fieldName = sortUsing;
      if (isIncreasing) {
        this.descending = false;
        this.ascending = true;
        this.students.sort((first, second) => {
          return first[sortUsing] >= second[sortUsing] ? 1 : -1;
        });
      } else {
        this.descending = true;
        this.ascending = false;
        this.students.sort((first, second) => {
          return first[sortUsing] <= second[sortUsing] ? 1 : -1;
        });
      }
    }
    if (sortUsing === 'id' || sortUsing === 'averageMark') {
      this.fieldName = sortUsing;
      if (isIncreasing) {
        this.descending = false;
        this.ascending = true;
        this.students.sort((first, second) => {
          return first[sortUsing] - second[sortUsing];
        });
      } else {
        this.descending = true;
        this.ascending = false;
        this.students.sort((first, second) => {
          return second[sortUsing] - first[sortUsing];
        });
      }
    }
    if (sortUsing === 'surname' || sortUsing === 'name' || sortUsing === 'patronymic') {
      this.fieldName = sortUsing;
      if (isIncreasing) {
        this.descending = false;
        this.ascending = true;
        this.students.sort((first, second) => {
          return first[sortUsing].toLowerCase() >= second[sortUsing].toLowerCase() ? 1 : -1;
        });
      } else {
        this.descending = true;
        this.ascending = false;
        this.students.sort((first, second) => {
          return first[sortUsing].toLowerCase() <= second[sortUsing].toLowerCase() ? 1 : -1;
        });
      }
    }
  }

  // функции фильтрации, нужно будет отрефакторить, оптимизировать
  splitFiltering(): void {
    if (!this.markForFiltering && !this.dateForFiltering) {
      this.students = Students.students;
      console.log('не то не то');
    }

    if (this.dateForFiltering) {
      const dateOfBirthday = new Date(this.dateForFiltering);
      this.students = Students.students.filter( student => {
        return student.birthday.toLocaleDateString() === dateOfBirthday.toLocaleDateString();
      });
      console.log('дата есть');
      if (this.markForFiltering && this.dateForFiltering) {
        this.students = Students.students.filter( student => {
          return (student.averageMark.toString() === this.markForFiltering.toString())
            && (student.birthday.toLocaleDateString() === dateOfBirthday.toLocaleDateString());
        });
        console.log('и то и то');
      }
    }

    if (this.markForFiltering) {
      this.students = Students.students.filter( student => {
        return student.averageMark.toString() === this.markForFiltering.toString();
      });
      console.log('оценка есть');
      if (this.markForFiltering && this.dateForFiltering) {
        const dateOfBirthday = new Date(this.dateForFiltering);
        this.students = Students.students.filter( student => {
          return (student.averageMark.toString() === this.markForFiltering.toString())
            && (student.birthday.toLocaleDateString() === dateOfBirthday.toLocaleDateString());
        });
        console.log('и то и то');
      }
    }
  }



}
