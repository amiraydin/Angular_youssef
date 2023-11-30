import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Major, Ticket } from '../../../models/ticket';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  public ticketForm: FormGroup;
  public MajorList: String[] = Object.values(Major);
  // public Student_List: Student[] = [];
  public Student_List: any = [];
  public studentFilter: any[] = [];
  // public studentSearch: any = new FormControl('');
  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService, public router: Router) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      major: ['', Validators.required],
      // studentSearch: [''],
      studentId: [''],
      date: [new Date()],
      archived: false
    });
    // Observable
    // this.studentService.students$.subscribe((students) => this.Student_List = students);
    // this.studentService.loadStudents(this.Student_List);
    // this.Student_List = this.studentService.studentUser;
  }

  ngOnInit() {
    this.loadStudents();
    // console.log('Liste of St : ', this.Student_List);
  }

  filterStudent(mot: any): void {
    // console.log("search", search.data);
    const words = mot.data.toLowerCase().split(/\s+/);
    // if (words.length > 1) {
    this.studentFilter = this.Student_List.filter((stud: any) => {
      const nom = stud.LastName.toLowerCase();
      return words.every((term: any) => nom.includes(term));
    })
    // } else {
    //   this.studentFilter = [];
    // }
  }

  selectStudent(student: any): void {
    // console.log("student is here", student);
    this.ticketForm.patchValue({
      studentSearch: student.LastName + ' ' + student.FirstName,
      studentId: student.id
    });
    this.studentFilter = [];
  }

  loadStudents() {
    return this.studentService.getUsers().subscribe((data: {}) => {
      this.Student_List = data; console.log('data:', data);
    });
  }

  addTicket() {
    // this.ticketForm.removeControl('studentSearch');
    // let ticket = this.ticketForm.value;
    // console.log("ticket values", ticket);
    this.ticketService.createTicket(this.ticketForm.value).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }
  // addTicket() {
  //   const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
  //   ticketToCreate.date = new Date();
  //   ticketToCreate.archived = false;
  //   const studentID = this.ticketForm.get('studentId')!.value;
  //   console.log('studentID:', studentID);
  //   // console.log('Student_List:', this.Student_List);
  //   ticketToCreate.student = this.Student_List.find((student: { id: any; }) => student.id == studentID);
  //   this.ticketService.addTicket(ticketToCreate);
  //   // this.router.navigate(['/tickets']);
  // }

}
