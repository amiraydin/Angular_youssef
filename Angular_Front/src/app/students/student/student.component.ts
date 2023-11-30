import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() {

  }

  @Input() student!: Student;
  @Output() studentHasBeenDeleted: EventEmitter<Student> = new EventEmitter<Student>();
  // @Output() studentHasBeenSelected: EventEmitter<Student> = new EventEmitter<Student>();

  ngOnInit() {
  }

  // studentSelected() {
  //   // console.log('student selceted');
  //   this.studentHasBeenSelected.emit(this.student);
  // }
  studentDelete() {
    this.studentHasBeenDeleted.emit(this.student);
  }

}
