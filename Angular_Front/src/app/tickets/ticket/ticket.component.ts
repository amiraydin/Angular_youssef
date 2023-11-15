import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input() ticket!: Ticket;

  @Output() ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() ticketHasBeenArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {
  }

  ngOnInit() {
    // console.log('ticket : ', this.ticket);
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }
  archiveTicket() {
    this.ticketHasBeenArchived.emit(this.ticket);
  }
  // deleteTicket() {
  //   this.ticketDeleted.emit(this.ticket)
  // }
}
