import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';
import { TicketService } from 'src/services/ticket/ticket.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public student_list: any = [];
  public ticket_studentId: any = [];
  constructor(public studentService: StudentService, public ticketService: TicketService, public router: Router) {

  }

  ngOnInit(): void {
    this.getTicketStudentIds();
    this.loadStudents();
  }

  getTicketStudentIds() {
    return this.ticketService.getTickets().subscribe((data: {}) => {
      this.ticket_studentId = data;
      // console.log('studentList ticket ids', data);
    })
  }

  studentSelected(student: Student) {
    return this.studentService.getOneUser(student.id).subscribe((data: {}) => {
      // console.log('one user id', data);
      // console.log('one user id', student.id);
      this.router.navigate(['/students/' + student.id])
    })
  }

  studentDelete(student: Student) {
    try {
      let idExiste = this.ticket_studentId.find((st: any) => st.studentId == student.id);
      // console.log("id is here", idExiste);
      if (idExiste) { alert("You should delete the ticket first !"); }
      else {
        this.studentService.deleteUser(student.id).subscribe(() => {
          this.router.navigate(['/stud_form'])
        })
      }
    } catch (error) {
      console.log("error student list", error);
    }
  }

  loadStudents() {
    return this.studentService.getUsers().subscribe((data: {}) => { this.student_list = data })
  }
}
