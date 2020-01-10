import { Component, OnInit } from '@angular/core';
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
  isFound = false;

  constructor() {

  }

  ngOnInit() {
    this.students = Students.students;
  }

  public toggleBadGrade(): void {
    this.isBadGrade = !this.isBadGrade;
  }

  public search(e: KeyboardEvent) {
    const value = (e.target as HTMLInputElement).value.toLowerCase();
    if (value) {
      this.students = this.students.filter(stud => stud.surname.toLowerCase().includes(value) ||
        stud.name.toLowerCase().includes(value) ||
        stud.patronymic.toLowerCase().includes(value));
      this.isFound = true;
    } else {
      this.students = Students.students;
      this.isFound = false;
    }
  }


}
