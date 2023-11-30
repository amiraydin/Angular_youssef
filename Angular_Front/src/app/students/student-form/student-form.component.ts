import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Student } from 'src/models/student';
import { Router } from '@angular/router';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  public profileForm: FormGroup;

  constructor(public studentService: StudentService, public router: Router) {
    this.profileForm = new FormGroup({
      FirstName: new FormControl<string>('', Validators.required),
      LastName: new FormControl<string>('', Validators.required),
      avatar: new FormControl<string>('https://i.pravatar.cc/100'),
      notes: new FormControl<string>('')
    })
  }

  ngOnInit() {
  }

  addAnUser() {
    this.studentService.createUser(this.profileForm.value).subscribe(() => {
      this.router.navigate(['/students']);
    })
  }
  // si on va utiliser le service student
  // addAnUser() {
  //   const creatStudent: Student = this.profileForm.getRawValue() as Student;
  //   this.studentService.addAnUser(creatStudent);
  // }
}
