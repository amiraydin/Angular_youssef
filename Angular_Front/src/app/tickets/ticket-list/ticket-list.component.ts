import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  public Ticket_List!: Ticket[];
  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.Ticket_List = tickets);
  }
  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
  }
}
