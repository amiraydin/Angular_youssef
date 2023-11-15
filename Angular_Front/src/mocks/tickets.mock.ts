import { Major, Ticket } from '../models/ticket';
import { STUDENTS_MOCKED } from './student.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    "title": 'SI4 in Madridista',
    "description": 'Ticket de Paul !',
    "date": dateToday,
    "student": STUDENTS_MOCKED[0],
    "major": Major.SI,
    "archived": false
  },
  {
    "title": 'SI5 in Paris CDG',
    "description": 'Description du voyage',
    "date": dateToday,
    "student": STUDENTS_MOCKED[1],
    "major": Major.GE,
    "archived": false
  },
  {
    "title": 'AI2 In aire',
    "description": 'here u are',
    "date": dateToday,
    "student": STUDENTS_MOCKED[2],
    "major": Major.AI,
    "archived": false
  },
];
