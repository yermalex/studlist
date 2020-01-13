import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../models/student';
import {Students} from '../student-list/students.mockup';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.less']
})
export class AddFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Student> = new EventEmitter<Student>();

  id: number = null;
  surname: string = null;
  name: string = null;
  patronymic: string = null;
  birthday: Date = null;
  averageMark: number = null;

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if (this.name.trim() && this.surname.trim() && this.patronymic.trim()) {
      const stud: Student = {
        id: this.id,
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        birthday: new Date(this.birthday),
        averageMark: this.averageMark
      };
      this.onAdd.emit(stud);

      this.id = this.surname = this.name = this.patronymic = this.birthday = this.averageMark = null;
    }
}


}
