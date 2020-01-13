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

  constructor() {
  }

  ngOnInit() {
    this.students = Students.students;
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

// функции фильтрации, нужно будет отрефакторить, оптимизировать
  markFiltering(): void {
    if (!this.markForFiltering) {
      this.students = Students.students;
    } else {
      this.students = Students.students.filter( student => {
        return student.averageMark.toString() === this.markForFiltering.toString();
      });
    }
  }

  dateFiltering(): void {
    if (!this.dateForFiltering) {
      this.students = Students.students;
    } else {
      const dateOfBirthday = new Date(this.dateForFiltering);
      this.students = Students.students.filter( student => {
        return student.birthday.toLocaleDateString() === dateOfBirthday.toLocaleDateString();
      });
    }
  }

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
          return (student.averageMark.toString() === this.markForFiltering.toString()) && (student.birthday.toLocaleDateString() === dateOfBirthday.toLocaleDateString());
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
          return (student.averageMark.toString() === this.markForFiltering.toString()) && (student.birthday.toLocaleDateString() === dateOfBirthday.toLocaleDateString());
        });
        console.log('и то и то');
      }
    }

  }



}
