import { Student } from "./student";

export enum Major {
  SI = 'SI',
  GE = 'GE',
  GB = 'GB',
  AI = 'AI',
  CI = 'CI',
  PO = 'PO'
}
export interface Ticket {
  id?: number;
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Major;
  archived?: boolean;
}

