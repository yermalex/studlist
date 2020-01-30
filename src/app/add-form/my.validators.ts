import { FormControl, FormGroup } from "@angular/forms";

export class MyValidators {

  static restrictedFullName(group: FormGroup): {[key: string]: boolean} {
    const surname = group.get("surname").value;
    const name = group.get("name").value;
    const patronymic = group.get("patronymic").value;

    if (name && (name === surname ||  name === patronymic)) {
      return {restrictedFullName: true};
    }
    return null;
  }

  static restrictedDOF(control: FormControl): {[key: string]: boolean} {
    const now = new Date();
    const dof = new Date(control.value);
    const dofPlusTenYears = dof.setFullYear(dof.getFullYear() + 10);

    if (dofPlusTenYears > now.getTime()) {
      return {restrictedDOF: true};
    }
    return null;
  }

}
