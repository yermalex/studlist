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

  constructor() {
  }

  ngOnInit() {
    this.students = Students.students;
  }

  public toggleBadGrade(): void {
    this.isBadGrade = !this.isBadGrade;
  }

  // public search(e: KeyboardEvent) {
  //   this.invalue = (e.target as HTMLInputElement).value.toLowerCase();
  //   // if (this.invalue) {
  //   //   this.students = this.students.filter(stud => stud.surname.toLowerCase().includes(this.invalue) ||
  //   //     stud.name.toLowerCase().includes(this.invalue) ||
  //   //     stud.patronymic.toLowerCase().includes(this.invalue));
  //   //
  //   // } else {
  //   //   this.students = Students.students;
  //   // }
  // }

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




}
