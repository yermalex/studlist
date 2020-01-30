import { Component } from '@angular/core';
import {Student} from './models/student';
import {Students} from './student-list/students.mockup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  isPopupOpened = false;

  addStud(stud: Student): void {
    Students.students.push(stud);
  }

}
