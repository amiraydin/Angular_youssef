import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  // public Ticket_List!: Ticket[];
  public Ticket_List: any = [];
  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService, public router: Router) {
    // this.ticketService.tickets$.subscribe((tickets) => this.Ticket_List = tickets);
  }
  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    return this.ticketService.getTickets().subscribe((data: {}) => {
      this.Ticket_List = data; console.log("all tickets :", data);
    })
  }

  deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket.id).subscribe(() => {
      this.router.navigate(['/ticket_form'])
    })
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
  }

}
