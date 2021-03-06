import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddFormComponent } from "./add-form/add-form.component";
import { EditFormComponent } from "./add-form/edit-form/edit-form.component";
import { AppComponent } from "./app.component";
import { StudentListComponent } from "./student-list/student-list.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddFormComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
