import { Component, OnInit } from '@angular/core';
import { Student} from '../models/student';
import { Students} from './students.mockup';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less']
})
export class StudentListComponent implements OnInit {
  public students: Student[] = Students.students;
  isBadGrade = false;

  constructor() {

  }

  ngOnInit() {
  }

  toggleBadGrade(): void {
    this.isBadGrade = !this.isBadGrade;
  }


}
