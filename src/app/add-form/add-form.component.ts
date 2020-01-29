import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../models/student';
import {StudentListComponent} from '../student-list/student-list.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.less']
})
export class AddFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  addStudentForm: FormGroup;
  stud: Student = new Student(null, null, null, null, null, null);

  constructor() {
  }

  ngOnInit() {
    this.addStudentForm = new FormGroup({
      fullName: new FormGroup({
        surname: new FormControl('', [Validators.required, Validators.pattern('^([А-ЯЁ]{1}[а-яё]{1,})$')]),
        name: new FormControl('', [Validators.required, Validators.pattern('^([А-ЯЁ]{1}[а-яё]{1,})$')]),
        patronymic: new FormControl('', [Validators.required, Validators.pattern('^([А-ЯЁ]{1}[а-яё]{1,})$')])
      }, [MyValidators.restrictedFullName]),
      birthday: new FormControl('', [Validators.required, MyValidators.restrictedDOF]),
      averageMark: new FormControl('', [Validators.required,
        Validators.min(0), Validators.max(5), Validators.pattern('^(0|[1-9]\\d*)([.]\\d+)?')])
    });
  }

  createStud() {
    if (this.addStudentForm.valid) {
      const formData = {...this.addStudentForm.value};

      this.stud = {
        id: StudentListComponent.getNextID() + 1,
        surname: formData.fullName.surname,
        name: formData.fullName.name,
        patronymic: formData.fullName.patronymic,
        birthday: new Date(formData.birthday),
        averageMark: formData.averageMark
      };
      this.onAdd.emit(this.stud);
      this.emitClosePopup();
    }
  }

  resetForm() {
    this.stud = new Student(null, null, null, null, null, null);
    this.addStudentForm.reset();
  }

  emitClosePopup() {
    this.closePopup.emit();
  }

}
