import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public student: any = [];
  private studentId: string | null = null;
  public detailForm: FormGroup;
  constructor(public router: Router, public formBuilder: FormBuilder, public studentService: StudentService, private activateRoute: ActivatedRoute) {
    this.studentId = this.activateRoute.snapshot.paramMap.get('id');

    this.detailForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      avatar: new FormControl<string>('https://i.pravatar.cc/100'),
      notes: new FormControl<String>('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.studentService.getOneUser(this.studentId).subscribe((data: {}) => this.student = data);
  }

  updateUser() {
    // console.log("user =>", this.detailForm.value);
    // console.log("user ID =>", this.studentId);
    this.studentService.updateUser(this.studentId, this.detailForm.value).subscribe(() => {
      this.router.navigate(['/students']);
      console.log('updated!!!');
    });
  }
  // studentSelected(student: Student) {
  //   return this.studentService.getOneUser(student.id).subscribe((data: {}) => {
  //     console.log('one user id', data);
  //   })
  // }

}
