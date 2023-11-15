import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Major, Ticket } from '../../../models/ticket';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  public ticketForm: FormGroup;
  public MajorList: String[] = Object.values(Major);
  public Student_List: Student[] = [];

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: new FormControl<String>('', Validators.required),
      description: new FormControl<String>('', Validators.required),
      major: new FormControl<String>('', Validators.required),
      studentID: ['']
    });
    // Observable
    this.studentService.students$.subscribe((students) => this.Student_List = students);
  }

  ngOnInit() {
    // console.log('Liste of St : ', this.Student_List);
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.archived = false;
    const studentID = this.ticketForm.get('studentID')!.value;
    // console.log('studentID:', studentID);
    // console.log('Student_List:', this.Student_List);
    ticketToCreate.student = this.Student_List.find(student => student.id == studentID);
    this.ticketService.addTicket(ticketToCreate);
  }

}
