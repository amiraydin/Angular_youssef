import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent, TicketListComponent } from './tickets';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketListComponent
  },
  {
    path: 'ticket_form',
    component: TicketFormComponent
  },
  {
    path: 'stud_form',
    component: StudentFormComponent
  },
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
