import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../my.validators';
import {StudentListComponent} from '../../student-list/student-list.component';
import {Student} from '../../models/student';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.less']
})
export class EditFormComponent implements OnInit {

  // @Output() onAdd: EventEmitter<Student> = new EventEmitter<Student>();

  editStudentForm: FormGroup;
  editStudent: Student = new Student(null, null, null, null, null, null);
  stud: Student = new Student(null, null, null, null, null, null);

  isActivePopup = false;

  constructor() { }

  ngOnInit() {
    this.editStudentForm = new FormGroup( {
      fullName: new FormGroup({
        surname: new FormControl('', [Validators.required, Validators.pattern('^([А-ЯЁ]{1}[а-яё]{1,})$')]),
        name: new FormControl('', [Validators.required, Validators.pattern('^([А-ЯЁ]{1}[а-яё]{1,})$')]),
        patronymic: new FormControl('', [Validators.required, Validators.pattern('^([А-ЯЁ]{1}[а-яё]{1,})$')])
      }, [MyValidators.restrictedFullName]),
      birthday: new FormControl('', [Validators.required, MyValidators.restrictedDOF]),
      averageMark: new FormControl('', [Validators.required,
        Validators.min(0), Validators.max(5), Validators.pattern('^(0|[1-9]\\d*)([.]\\d+)?')])
    });
    this.editStudentForm.patchValue({averageMark: 3});
  }

  editStud() {
    if (this.editStudentForm.valid) {
      const formData = {...this.editStudentForm.value};

      this.stud = {
        id: StudentListComponent.getNextID() + 1,
        surname: formData.fullName.surname,
        name: formData.fullName.name,
        patronymic: formData.fullName.patronymic,
        birthday: new Date(formData.birthday),
        averageMark: formData.averageMark
      };
      // this.onAdd.emit(this.stud);
    }
  }
  resetForm() {
    this.stud = new Student(null, null, null, null, null, null);
    this.editStudentForm.reset();
  }

}
