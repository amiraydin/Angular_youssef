import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentService } from 'src/services/student/student.service';
import { StudentComponent } from './students/student/student.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentListComponent } from './students/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    StudentFormComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import all dependencies
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TicketService, StudentService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
