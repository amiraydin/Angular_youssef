import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
// import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */
  // private ticketList: Ticket[] = TICKETS_MOCKED;
  // public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  apiURL = 'http://localhost:5000';

  httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {
  }

  getTickets() {
    return this.http.get<Ticket>(this.apiURL + '/api/tickets').pipe(retry(1), catchError(this.handleError));
  }

  getOneTicket(id: any) {
    return this.http.get<Ticket>(this.apiURL + '/api/tickets/' + id).pipe(retry(1), catchError(this.handleError));
  }

  createTicket(ticket: any) {
    return this.http.post<Ticket>(this.apiURL + '/api/tickets', ticket, this.httpOption).pipe(retry(1), catchError(this.handleError));
  }

  updateTicket(id: any, ticket: any) {
    return this.http.put<Ticket>(this.apiURL + '/api/tickets/' + id, JSON.stringify(ticket), this.httpOption).pipe(retry(1), catchError(this.handleError));
  }

  deleteTicket(id: any) {
    return this.http.delete<Ticket>(this.apiURL + '/api/tickets/' + id, this.httpOption).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errMsg = '';
    if (error.error instanceof ErrorEvent) errMsg = error.error.message;
    else errMsg = `ErrorText:${error.headers}\nError Code : ${error.status}\nMessage : ${error.message}\nOther : ${error.error.message}`;
    window.alert(errMsg);
    return throwError(() => {
      return errMsg;
    })
  }

  // addTicket(ticket: Ticket) {
  //   this.ticketList.push(ticket);
  //   // this.tickets$.next(this.ticketList);
  // }

  archiveTicket(ticket: Ticket) {
    ticket.archived = true;
    // this.tickets$.next(this.ticketList);
  }
  // deleteTicket(ticket: Ticket): void {
  //   this.ticketList = this.ticketList.filter(({ title }) => title !== title);
  // }
}
