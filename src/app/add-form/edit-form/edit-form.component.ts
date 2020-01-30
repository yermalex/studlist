import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Student } from "../../models/student";
import { MyValidators } from "../my.validators";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["../add-form.component.less"]
})
export class EditFormComponent implements OnInit {

  @Input() editStudent: Student;
  @Output() onAdd: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  editStudentForm: FormGroup;

  stud: Student = new Student(null, null, null, null, null, null);

  ngOnInit(): void {
    this.editStudentForm = new FormGroup({
      fullName: new FormGroup({
        surname: new FormControl("", [Validators.required, Validators.pattern("^([А-ЯЁ]{1}[а-яё]{1,})$")]),
        name: new FormControl("", [Validators.required, Validators.pattern("^([А-ЯЁ]{1}[а-яё]{1,})$")]),
        patronymic: new FormControl("", [Validators.required, Validators.pattern("^([А-ЯЁ]{1}[а-яё]{1,})$")])
      }, [MyValidators.restrictedFullName]),
      birthday: new FormControl("", [Validators.required, MyValidators.restrictedDOF]),
      averageMark: new FormControl("", [Validators.required,
        Validators.min(0), Validators.max(5), Validators.pattern("^(0|[1-9]\\d*)([.]\\d+)?")])
    });
    this.editStudentForm.patchValue({fullName: this.editStudent});
    this.editStudentForm.patchValue({birthday: new Date(this.editStudent.birthday).toISOString().substring(0, 10)});
    this.editStudentForm.patchValue({averageMark: this.editStudent.averageMark});
  }

  editStud(): void {
    if (this.editStudentForm.valid) {
      const formData = {...this.editStudentForm.value};

      this.stud = {
        id: this.editStudent.id,
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
    this.editStudentForm.reset();
  }

  emitClosePopup(): void {
    this.closePopup.emit();
  }

}
